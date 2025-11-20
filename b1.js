import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.*;
import java.io.FileOutputStream;
import java.io.IOException;

public class PeakTestReportExcel {

    public static void main(String[] args) throws IOException {

        XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet("Peak Test Results");

        int rowCount = 0;

        // === Header Style ===
        Font headerFont = workbook.createFont();
        headerFont.setBold(true);
        headerFont.setFontHeightInPoints((short) 14);

        CellStyle headerStyle = workbook.createCellStyle();
        headerStyle.setFont(headerFont);

        // === Section Header Style ===
        Font sectionFont = workbook.createFont();
        sectionFont.setBold(true);
        sectionFont.setFontHeightInPoints((short) 12);

        CellStyle sectionStyle = workbook.createCellStyle();
        sectionStyle.setFont(sectionFont);

        // === Table Header Style ===
        CellStyle tableHeader = workbook.createCellStyle();
        Font tableFont = workbook.createFont();
        tableFont.setBold(true);
        tableHeader.setFont(tableFont);
        tableHeader.setBorderBottom(BorderStyle.THIN);
        tableHeader.setBorderTop(BorderStyle.THIN);
        tableHeader.setBorderLeft(BorderStyle.THIN);
        tableHeader.setBorderRight(BorderStyle.THIN);

        // === Table Cell Style ===
        CellStyle tableCell = workbook.createCellStyle();
        tableCell.setBorderBottom(BorderStyle.THIN);
        tableCell.setBorderTop(BorderStyle.THIN);
        tableCell.setBorderLeft(BorderStyle.THIN);
        tableCell.setBorderRight(BorderStyle.THIN);

        // ************* Header Row *************
        Row title = sheet.createRow(rowCount++);
        title.setHeightInPoints(28); // Bigger cell size
        Cell tCell = title.createCell(0);
        tCell.setCellValue("6.1. 7.1 Peak Test Results");
        tCell.setCellStyle(headerStyle);

        // Merge across 4 columns (0 to 3)
        sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 3));

        // ************* Sub Header *************
        Row sub = sheet.createRow(rowCount++);
        sub.setHeightInPoints(22);
        Cell subCell = sub.createCell(0);
        subCell.setCellValue("7.1.1 Peak Test –");
        subCell.setCellStyle(sectionStyle);
        sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 3));

        // ************* Bullet Points *************
        sheet.createRow(rowCount++).createCell(0)
                .setCellValue("• Processing time for 600 transactions file is ~8 seconds (it is within the SLA of 5 min).");

        // ************* Table Title *************
        Row tradeTitle = sheet.createRow(rowCount++);
        tradeTitle.setHeightInPoints(20);
        Cell tradeCell = tradeTitle.createCell(0);
        tradeCell.setCellValue("Trade – SLA 5 Mins");
        tradeCell.setCellStyle(sectionStyle);
        sheet.addMergedRegion(new CellRangeAddress(rowCount - 1, rowCount - 1, 0, 3));

        // ************* Table Header *************
        Row header = sheet.createRow(rowCount++);
        String[] columns = {"UMI", "RECEIVEDDATE", "DELIVEREDDATE", "Duration"};

        for (int i = 0; i < columns.length; i++) {
            Cell cell = header.createCell(i);
            cell.setCellValue(columns[i]);
            cell.setCellStyle(tableHeader);
        }

        // ************* Table Data *************
        Row data = sheet.createRow(rowCount++);
        String[] val = {"20251117PTSanityn99000004", "17-NOV-25 12.32.34 PM", "17-NOV-25 12.32.42 PM", "8 Sec"};

        for (int i = 0; i < val.length; i++) {
            Cell cell = data.createCell(i);
            cell.setCellValue(val[i]);
            cell.setCellStyle(tableCell);
        }

        // === Auto Resize Columns ===
        for (int i = 0; i < 4; i++) {
            sheet.autoSizeColumn(i);
        }

        FileOutputStream fileOut = new FileOutputStream("Peak_Test_Report.xlsx");
        workbook.write(fileOut);
        workbook.close();
        fileOut.close();

        System.out.println("Excel Created Successfully with merged large header!");
    }
}
