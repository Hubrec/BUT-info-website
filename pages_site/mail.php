<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Envoi d'un message par formulaire</title>
   </head>

   <body>

      <p>
         Hello
      </p>

      <?php
      $retour = mail('mail.iutsiteweb@gmail.com', 'Envoi depuis la page Contact', $_POST['message'],  $_POST['mail']);
      if ($retour) {
         echo '<p>Votre message a bien été envoyé.</p>';
      }
      ?>


   </body>
</html>