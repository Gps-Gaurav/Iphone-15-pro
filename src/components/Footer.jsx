import React from 'react'
import { footerLinks } from '../constants'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
       <nav class="footer-menu">
    <div class="footer-col">
      <div class="item">
        <input type="checkbox" id="products"/>
        <div class="col-section">
          <label for="products">
          <h3>Shop and learn</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">iTunes</a></li>
            <li><a href="#">HomePod</a></li>
            <li><a href="#">iPod touch</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-col">
      <div class="item">
        <input type="checkbox" id="store"/>
        <div class="col-section">
          <label for="store">
          <h3>Apple Store</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Find a Store</a></li>
            <li><a href="#">Genius Bar</a></li>
            <li><a href="#">Today at Apple</a></li>
            <li><a href="#">Apple Camp</a></li>
            <li><a href="#">Field Trip</a></li>
            <li><a href="#">Apple Store App</a></li>
            <li><a href="#">Refurbished and Clearance</a></li>
            <li><a href="#">Financing</a></li>
            <li><a href="#">Reuse and Recycling</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Shopping Help</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-col">
      <div class="item">
        <input type="checkbox" id="education"/>
        <div class="col-section">
          <label for="education">
          <h3>For Education</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Apple and Education</a></li>
            <li><a href="#">Shop for College</a></li>
          </ul>
        </div>
      </div>
      <div class="item item-padding-top">
        <input type="checkbox" id="business"/>
        <div class="col-section">
          <label for="business">
          <h3>For Business</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Apple and Business</a></li>
            <li><a href="#">Shop for Business</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-col">
      <div class="item">
        <input type="checkbox" id="acccount"/>
        <div class="col-section">
          <label for="acccount">
          <h3>Account</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Manage Your Apple ID</a></li>
            <li><a href="#">Apple Store Account</a></li>
            <li><a href="#">iCloud.com</a></li>
          </ul>
        </div>
      </div>
      <div class="item item-padding-top">
        <input type="checkbox" id="values"/>
        <div class="col-section">
          <label for="values">
          <h3>Apple Values</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Environment</a></li>
            <li><a href="#">Inclusion and Diversity</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Supplier Responsibility</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-col">
      <div class="item">
        <input type="checkbox" id="about"/>
        <div class="col-section">
          <label for="about">
          <h3>About Apple</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Apple Leadership</a></li>
            <li><a href="#">Job Opportunities</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact Apple</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
            other retailer
            </span>{' Gps '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call +91 9389939393
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer