import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatTime } from './scoreCalculator';

export const generatePDF = (competition, participants, logoUrl = '/logo.jpg') => {
    let doc;
    try {
        doc = new jsPDF();
        console.log("jsPDF instance created successfully");
    } catch (e) {
        console.error("Error creating jsPDF instance:", e);
        alert("PDF Library Error (Check Console): " + e.message);
        return;
    }

    const primaryColor = [59, 130, 246]; // Blue 500

    console.log("Generating PDF for:", competition.name);
    console.log("Logo URL:", logoUrl);

    const img = new Image();
    let isFinished = false;

    const finish = (loadedImg) => {
        if (isFinished) return;
        isFinished = true;

        try {
            createPdfContent(doc, loadedImg, competition, participants, primaryColor);
            doc.save(`${competition.name.replace(/\s+/g, '_')}_Results.pdf`);
            console.log("PDF saved successfully");
        } catch (error) {
            console.error("Error generating PDF content:", error);
            alert("Failed to generate PDF content. Check console.");
        }
    };

    img.onload = () => {
        console.log("Logo loaded successfully");
        finish(img);
    };

    img.onerror = (e) => {
        console.warn("Logo failed to load (onerror), proceeding without it", e);
        finish(null);
    };

    // 2-second timeout to avoid hanging
    setTimeout(() => {
        if (!isFinished) {
            console.warn("Logo load timed out, proceeding without logo");
            finish(null);
        }
    }, 2000);

    img.src = logoUrl;
};

const createPdfContent = (doc, img, competition, participants, primaryColor) => {
    const pageWidth = doc.internal.pageSize.width;

    // Header Section
    if (img) {
        try {
            doc.addImage(img, 'JPEG', 14, 10, 20, 20); // x, y, w, h
        } catch (err) {
            console.warn("Falling back to PNG format for logo image");
            try {
                doc.addImage(img, 'PNG', 14, 10, 20, 20);
            } catch (err2) {
                console.error("Failed to add image to PDF:", err2);
            }
        }
    }

    doc.setFontSize(22);
    doc.setTextColor(...primaryColor);
    doc.text("ROBODASH - DRAIC", img ? 40 : 14, 20);

    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("Innovate • Iterate • Conquer", img ? 40 : 14, 28);

    doc.setFontSize(16);
    doc.setTextColor(0);
    doc.text(`Competition: ${competition.name}`, 14, 45);

    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 52);

    // Table
    const tableColumn = ["Rank", "Participant", "Time", "Penalties", "Total Score", "Status"];
    const tableRows = [];

    participants.forEach((p, index) => {
        const participantData = [
            p.status === 'DISQUALIFIED' ? 'DQ' : index + 1,
            p.name,
            p.timeString || '-',
            p.penalties,
            formatTime(p.totalSeconds),
            p.status
        ];
        tableRows.push(participantData);
    });

    // Explicitly call autoTable function instead of doc.autoTable
    try {
        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 60,
            theme: 'grid',
            headStyles: { fillColor: primaryColor, textColor: 255, fontSize: 12, fontStyle: 'bold' },
            styles: { fontSize: 10, cellPadding: 3 },
            alternateRowStyles: { fillColor: [240, 249, 255] },
        });
    } catch (atError) {
        console.error("autoTable error:", atError);
        doc.setFontSize(10);
        doc.setTextColor(255, 0, 0);
        doc.text("Error rendering table: " + atError.message, 14, 65);
    }

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, doc.internal.pageSize.height - 10, { align: 'center' });
    }
};
