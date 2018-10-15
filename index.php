<?php include './headers.php'; ?>

<div class="card">
    <div class="card-header">Tag</div>
    <div class="card-body">

        <div class="form-group">
            <label for="tag" class="col-form-label">Name Tag</label>
            <input type="text" class="form-control form-control-sm" id="tag"  required autocomplete="off">
            <div class="help-block with-errors text-danger"></div>
        </div>
        <input type="button" name="Generar" value="Generar" class="btn btn-outline-primary" onclick="GenerateCode()">

    </div> 
</div>

<div class="row">
    <div class="col">
        <div class="card">
            <div class="card-header">HTML Code</div>
            <div class="card-body">
                <textarea rows="10" cols="50" id="HTML">
                </textarea>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-info" id="HTMLCopy">Copy</button>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card">
            <div class="card-header">JS Code</div>
            <div class="card-body">
                <textarea rows="10" cols="50" id="JS">
                </textarea>
            </div> 
            <div class="card-footer">
                <button class="btn btn-outline-info" id="JSCopy">Copy</button>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card">
            <div class="card-header">PHP Code</div>
            <div class="card-body">
                <textarea rows="10" cols="50" id="PHP">
                </textarea>
            </div> 
            <div class="card-footer">
                <button class="btn btn-outline-info" id="PHPCopy">Copy</button>
            </div>
        </div>
    </div>
</div>
<?php include './footer.php'; ?>

<script>
    function GenerateCode() {
        var tag = $('#tag').val();
        console.log(tag);
        HTMLCode(tag);
        JSCode(tag);
        PHPCode(tag);
    }

    function HTMLCode(tag) {
        var HTMLCode = '<div class="form-group">\n';
        HTMLCode += '<label for="' + tag + '">' + tag + '</label>\n';
        HTMLCode += '<input type="text" class="form-control" id="' + tag + '" name="' + tag + '" placeholder="Enter ' + tag + '" required>\n';
        HTMLCode += '<div class="help-block with-errors text-danger"></div>\n';
        HTMLCode += '</div>\n';

        console.log(HTMLCode);
        $("#HTML").val(HTMLCode);
    }

    function JSCode(tag) {
        var JSCOde = 'var ' + tag + ' = $("#' + tag + '").val();\n';
        JSCOde += "console.log('" + tag + ": '+ " + tag + ");";
        console.log(JSCOde);
        $("#JS").val(JSCOde);
    }

    function PHPCode(tag) {
        var PHPCode = '//' + tag + '\n';
        PHPCode += 'if (empty($_POST["' + tag + '"])) {\n';
        PHPCode += '$errorMSG .= "' + tag + ' is required ";\n';
        PHPCode += '} else {\n';
        PHPCode += ' $' + tag + ' = $_POST["' + tag + '"];\n';
        PHPCode += '}';
        console.log(PHPCode);
        $("#PHP").val(PHPCode);
    }

    $("#HTMLCopy").click(function () {
        console.log("HTMLCopy");
        $("#HTML").select();
        document.execCommand('copy');
    });
    $("#JSCopy").click(function () {
        $("#JS").select();
        document.execCommand('copy');
    });
    $("#PHPCopy").click(function () {
        $("#PHP").select();
        document.execCommand('copy');
    });
</script>








