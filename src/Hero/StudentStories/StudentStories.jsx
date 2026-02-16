import React from "react";
import "./StudentStories.css";

const StudentStories = () => {
  return (
    <section className="stories-section">
      <div className="stories-container">

        {/* HEADER */}
        <div className="stories-header">
          <div>
            <h2 className="stories-title">
FOUNDERS WITH <br /> PARTNER WITH
            </h2>
            <p className="stories-subtitle">
Hear directly from the founders we're privileged to back.

            </p>
          </div>

          <button className="view-btn">
            View All ↗
          </button>
        </div>

        {/* CARDS */}
        <div className="stories-grid">

          {/* CARD 1 */}
          <div className="story-card">
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" alt="Student" />
            <div className="overlay"></div>

            <div className="story-content">
              <div className="quote-icon">“</div>

              <h3>
My favorite solution in the market. We work 5x faster with Ryleni.

              </h3>

              <div className="story-footer">
                <div>
                  <h4>Ramakrishnan K</h4>
                  <p>B.Com International Finance and Accounting with ACCA, UK</p>
                </div>
                <img className="company-logo" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Deshaw-logo.svg" alt="Company" />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="story-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" alt="Student" />
            <div className="overlay"></div>

            <div className="story-content">
              <div className="quote-icon">“</div>

              <h3>
I know it's cliche, but we were lost before we found Ryleni. Can't thank you guys enough!

              </h3>

              <div className="story-footer">
                <div>
                  <h4>Akshara Sasikumar</h4>
                  <p>B.Com Corporate Accounting</p>
                </div>
                <img className="company-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Morgan_Stanley_Logo_1.svg" alt="Company" />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="story-card">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="Student" />
            <div className="overlay"></div>

            <div className="story-content">
              <div className="quote-icon">“</div>

              <h3>
If I could give 11 stars, I'd give 12.
SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.

              </h3>

              <div className="story-footer">
                <div>
                  <h4>Namitha Suresh</h4>
                  <p>M.Com International Finance and Accounting with ACCA, UK</p>
                </div>
                <img className="company-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PwC_logo.svg" alt="Company" />
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="story-card">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" alt="Student" />
            <div className="overlay"></div>

            <div className="story-content">
              <div className="quote-icon">“</div>

              <h3>
SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.

              </h3>

              <div className="story-footer">
                <div>
                  <h4>Sajeesh S.J</h4>
                  <p>B.Com International Finance and Accounting with ACCA, UK</p>
                </div>
                <img className="company-logo" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/EY_logo_2019.svg" alt="Company" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StudentStories;
