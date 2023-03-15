
      
            <!DOCTYPE html>

<html lang="en">

<head>
    <title>連結試算表 - 表單Form</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- 連結Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous">
    </script>
    <!-- CSS 格式修改 -->
    <style>
        .container-contact {
            padding: 20px;
            text-align: center;
            color: white;
            background-color: rgb(42, 165, 159);
            width: 100%;
        }
        
        .container-contact h3 {
            font-size: 30px;
            text-align: center;
            padding: 20px;
        }
        
        .btn {
            width: 100%;
            font-size: 20px;
            margin: 20px 0px 20px 0px;
            background-color: #FFD9EC;
            color: rgb(255, 255, 255);
            border-radius: 20px;
            transition: 1s;
        }
        
        .btn:hover {
            background-color: rgb(178, 224, 84);
            color: black;
        }
        
        input {
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="container-contact">
        <h3>與我們聯絡Contact Us</h3>

        <div class="row">
            <!-- 第一欄位 -->
            <div class="col-sm-2">

            </div>
            <!-- 第二欄位 -->
            <div class="col-sm-8">
                <form id="myForm">
                    <div class="row">
                        <!-- 第一個輸入 - 名字 -->
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
                        </div>
                        <!-- 第二個輸入 - Email -->
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
                        </div>
                    </div>
                    <br>
                    <!-- 第三個輸入 - 留言 -->
                    <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <button class="btn " type="submit" id="submitButton">送出Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- 第三欄位 -->
            <div class="col-sm-2">

            </div>
        </div>
    </div>

    <!-- JavaScript程式 -->
    <script>
        // 抓輸入的值

        function getValues() {

            var name = document.getElementById("name");
            var email = document.getElementById("email");
            var comments = document.getElementById("comments");

            var rowData = {
                name: name.value,
                email: email.value,
                comments: comments.value
            };

            // 上傳資料
            google.script.run.addData(rowData);
            // 清除表單上的資料
            document.getElementById("myForm").reset();
            // 完成後的訊息
            alert("謝謝您的訊息，我們會儘快處理您的留言，謝謝！");
        }

        document.getElementById("submitButton").addEventListener("click", getValues);
    </script>
</body>

</html>


      