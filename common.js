commonNav.innerHTML = `
    <div class="top-nav">
    <img class="customNavLogo" style="position: absolute; padding: 20px;" width="200" src="images/navLogo2.png"/>
    <ul class="navigation">
        <li class="customNavLogo2"><img width="200" src="images/navLogo.png"/></li>
        <li><a href="index.html">Home</a></li>
        <li><a href="shows_h3.html">Shows</a></li>
        <li><a href="press.html">Press&nbsp;Kit</a></li>
        <li><a href="Contact.html">Contact</a></li>
    </ul>
    <img style="width: 50%; background: black; padding-left: 25%; padding-right: 25%" src="images/UsedPhotos/shows.jpg"/>

    </div>
    </div>
`;

commonFooter.innerHTML = `  <div class="footer-entry">

<h2>Contact Information</h2>
<p>Email: <a href="mailto:DevinEthanG@gmail.com">DevinEthanG@gmail.com</a></p>
<p>Phone Number: 425-361-6603 </p>
<span class="Social"><a href="https://www.facebook.com/devin.graupmann" style="color: lightblue;" target="_blank">
<img src="images/UsedPhotos/facebook_logo.png" alt="The Magic of Devin Graupmann Facebook" width="50"></a></span>

<p><small>Copyright &copy; 2021<span id="lblYear"></span>. Devin Graupmann. All rights reserved.</small></p>
<script>
    if (new Date().getFullYear() > 2021) {
        lblYear.innerText = ' to ' + new Date().getFullYear();
    }
</script>
</div>`;