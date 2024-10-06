import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <div>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettà muse.</p>
          <form>
            <input placeholder="Enter your e-mail..." type="email" />
            <input type="submit" defaultValue="SUBSCRIBE" />
          </form>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5880</p>
          <p className="space">customercare@mettamuse.com</p>
          <h3 className="space">CURRENCY</h3>
          <p>
            <img alt="Flag of USA" src="https://placehold.co/20x20" />
            USD
          </p>
          <p className="space">
            Transactions will be completed in Euros and currency reference is
            available on request.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>mettà muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders &amp; Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment &amp; Pricing</li>
            <li>Return &amp; Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
          </ul>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <h3>mettà muse ACCEPTS</h3>
          <div className="payment-icons">
            <img alt="Apple Pay" src="https://placehold.co/40x20" />
            <img alt="MasterCard" src="https://placehold.co/40x20" />
            <img alt="Visa" src="https://placehold.co/40x20" />
            <img alt="American Express" src="https://placehold.co/40x20" />
            <img alt="PayPal" src="https://placehold.co/40x20" />
            <img alt="Google Pay" src="https://placehold.co/40x20" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
