function generateHTML(data){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
    <title>My Team</title>
</head>

<body>
    <main>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">

                <div class="card m-4" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h5 class="card-title">${data[0].getName()}</h5>
                        <h6 class="card-subtitle mb-2"><i class="bi bi-briefcase"></i> ${data[0].getRole()}</h6>
                    </div>

                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data[0].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${data[0].getEmail()}">${data[0].getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${data[0].getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>

                <div class="card m-4" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h5 class="card-title">${data[1].getName()}</h5>
                        <h6 class="card-subtitle mb-2"><i class="bi bi-sunglasses"></i> ${data[1].getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data[1].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${data[1].getEmail()}">${data[1].getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${data[1].getGithub()}" target="_blank">${data[1].getGithub()}</a></li>
                        </ul>
                    </div>
                </div>

                <div class="card m-4" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h5 class="card-title">${data[2].getName()}</h5>
                        <h6 class="card-subtitle mb-2"><i class="bi bi-sunglasses"></i> ${data[2].getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data[2].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${data[2].getEmail()}">${data[2].getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${data[2].getGithub()}" target="_blank">${data[2].getGithub()}</a></li>
                        </ul>
                    </div>
                </div>

                <div class="card m-4" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h5 class="card-title">${data[3].getName()}</h5>
                        <h6 class="card-subtitle mb-2"><i class="bi bi-sunglasses"></i> ${data[3].getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data[3].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${data[3].getEmail()}">${data[3].getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${data[3].getGithub()}" target="_blank">${data[3].getGithub()}</a></li>
                        </ul>
                    </div>
                </div>

                <div class="card m-4" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h5 class="card-title">${data[4].getName()}</h5>
                        <h6 class="card-subtitle mb-2"><i class="bi bi-journal-bookmark-fill"></i> ${data[4].getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data[4].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${data[4].getEmail()}">${data[4].getEmail()}</a></li>
                            <li class="list-group-item">School: ${data[4].getSchool()}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
    </script>
</body>

</html>
    `;
}

module.exports = generateHTML;