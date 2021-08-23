commonNav.innerHTML = `  <div class="border-nav">
    <div class="top-nav">
        <ul class="navigation">
            <span style="flex: 1;">
            <li><img src="images/UsedPhotos/Devin1.jpg" alt="The Magic of Devin Graupmann" width="100"></li>
            <h1>The Magic Of Devin&nbsp;Graupmann</h1>
            </span>
            <li><a href="index.html">Home</a></li>
            <li><a href="shows_h3.html">Shows</a></li>
            <li><a href="press.html">Press&nbsp;Kit</a></li>
            <li><a href="Contact.html">Contact</a></li>
        </ul>

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