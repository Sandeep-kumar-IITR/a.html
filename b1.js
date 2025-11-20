Sub LockAndProtectAllFormulaCells()

    Dim ws As Worksheet
    Dim c As Range

    '?? Work on the sheet that is currently active
    Set ws = ActiveSheet

    '1) Unprotect first (ignore error if not protected)
    On Error Resume Next
    ws.Unprotect Password:="1234"
    On Error GoTo 0

    '2) Unlock all cells
    ws.Cells.Locked = False
    ws.Cells.FormulaHidden = False

    '3) Lock + hide only cells that actually have formulas
    For Each c In ws.UsedRange
        If c.HasFormula Then
            c.Locked = True
            c.FormulaHidden = True
        End If
    Next c

    '4) Protect the sheet so locked cells cannot be edited
    ws.Protect Password:="1234", _
               DrawingObjects:=True, _
               Contents:=True, _
               Scenarios:=True, _
               AllowFormattingCells:=True, _
               AllowFormattingColumns:=True, _
               AllowFormattingRows:=True

    'Optional: user can only select unlocked cells
    ws.EnableSelection = xlUnlockedCells

    MsgBox "Done: all formula cells are now uneditable.", vbInformation

End Sub


