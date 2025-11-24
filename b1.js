public static Date convertUTCtoIST(Date utcDate) {
    long istOffset = TimeZone.getTimeZone("Asia/Kolkata").getOffset(utcDate.getTime());
    long utcOffset = TimeZone.getTimeZone("UTC").getOffset(utcDate.getTime());
    return new Date(utcDate.getTime() + (istOffset - utcOffset));
}



import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class TimeConversion {

    public static String convertUTCtoIST(String utcDateTime) throws Exception {
        
        // Input pattern (same format as your source)
        SimpleDateFormat sourceFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        sourceFormat.setTimeZone(TimeZone.getTimeZone("UTC"));  // incoming is UTC
        
        // Parse input string to Date
        Date date = sourceFormat.parse(utcDateTime);

        // Output pattern (IST format you want)
        SimpleDateFormat destFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        destFormat.setTimeZone(TimeZone.getTimeZone("Asia/Kolkata")); // change to IST
        
        // Convert and return
        return destFormat.format(date);
    }

    public static void main(String[] args) throws Exception {
        String utcInput = "2025-11-24 10:15:00";  // example input
        System.out.println("IST Time = " + convertUTCtoIST(utcInput));
    }
}



Private Sub Worksheet_Change(ByVal Target As Range)

If Target.Address <> "$A$11" Then Exit Sub   ' Change here
Application.EnableEvents = False

ActiveSheet.Unprotect "123"       ' Sheet must be unprotected first

If UCase(Range("A11").Value) = "CUSTOM" Then
    Range("G1:L15").Locked = False
    Range("G1:L15").EntireColumn.Hidden = False

    Range("D5:E15").Locked = True
    Range("D5:E15").EntireColumn.Hidden = True

Else
    Range("D5:E15").Locked = False
    Range("D5:E15").EntireColumn.Hidden = False

    Range("G1:L15").Locked = True
    Range("G1:L15").EntireColumn.Hidden = True
End If

ActiveSheet.Protect Password:="123", UserInterfaceOnly:=True  ' Reprotect

Application.EnableEvents = True

End Sub
    Sub LockFormulaCells()

    Dim ws As Worksheet
    Dim c As Range

    '👉 change sheet name here if different
    Set ws = ThisWorkbook.Sheets("Sheet1")

    '🔓 Unprotect FIRST (required to avoid error)
    On Error Resume Next
    ws.Unprotect Password:="1234"
    On Error GoTo 0

    '🔓 Unlock whole sheet cells first
    ws.Cells.Locked = False
    ws.Cells.FormulaHidden = False

    '🔐 Lock only formula cells now
    For Each c In ws.UsedRange
        If c.HasFormula Then
            c.Locked = True
            c.FormulaHidden = True
        End If
    Next c

    '🔐 Protect AFTER locking
    ws.Protect Password:="1234", _
                DrawingObjects:=True, Contents:=True, Scenarios:=True

    'Optional: allow selecting only editable cells
    ws.EnableSelection = xlUnlockedCells

    MsgBox "Formula cells are locked & uneditable!", vbInformation

End Sub



