Sub LockFormulaCells_Sheet1()

    Dim ws As Worksheet
    Dim c As Range

    '👉 Change the sheet name if different
    Set ws = ThisWorkbook.Sheets("Sheet1")

    'Unprotect (ignore error if not protected)
    On Error Resume Next
    ws.Unprotect Password:="1234"
    On Error GoTo 0

    'Unlock everything first
    ws.Cells.Locked = False
    ws.Cells.FormulaHidden = False

    'Lock + hide formula cells only
    For Each c In ws.UsedRange
        If c.HasFormula Then
            c.Locked = True
            c.FormulaHidden = True
        End If
    Next c

    'Protect
    ws.Protect Password:="1234"
    ws.EnableSelection = xlUnlockedCells

    MsgBox "Formula cells locked on Sheet1.", vbInformation

End Sub
