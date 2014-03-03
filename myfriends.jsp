<%@include file="include/topbar.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <!--Bootstrap-->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" media="screen">
    <title>My friends</title>
    <style>
      .col-xs-6{
        height: 80px;
        background-color: blue;
        color: white;
        text-align: center;
      }
      .col-xs-12{
        height: 100px;
        background-color: green;
        color: white;
        text-align: left;
      }
    </style>
  </head>
  <body><br><br><br>
  <!-- Grid Classes .container:wrapper for all rows
              .row: contains all column classes
              .col-##-##:the sizes of the columns in your row -->
    <div class="container">
      <div class="row"><!--search-->
        <div class="col-xs-12"></div>
      </div>
      <div class="row"><!--friends-->
        <!--do for loop on the friends-->
        <div class="col-xs-8">
          <table border="1">
            <tr>
              <td><img src="url" alt="friends name" width="50" height="50"></td>
              <td>Rebecca Tan<br/>
                <a href="unfollowfriend.jsp">Unfriend</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="col-xs-4">
          <table border="1">
            <tr>
              <td><img src="url" alt="friends name" width="50" height="50"></td>
              <td>Rebeccaskghid Tan<br/>
                <a href="unfollowfriend.jsp">Unfriend</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  </body>
</html>