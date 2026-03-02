import React from "react";
import "./style.css";

export default function MemberIdentityForm() {
  return (
    <div className="form-container">
      <div className="form-paper">
        {/* Header */}
        <h1 className="title">সদস্যের পরিচয় পত্রের ফরম</h1>
        <h3 className="subtitle">বিধি ৩৩(২) ধারা</h3>
        <h4 className="subtitle2">(কেন্দ্রীয় ও জাতীয় সমিতির জন্য)</h4>

        <div className="society-name">
          <input className="line long-line" />
          সমবায় সমিতি লিঃ
        </div>

        <div className="society-sub">
          (পরিচালনাকারী সদস্য সমিতির নাম)
        </div>

        {/* Side Note Box */}
        <div className="note-box-fields">
          <div className="note-box">
            সমিতির সভাপতি বা নিবন্ধ কর্তৃপক্ষ কর্তৃক স্বাক্ষরিত এবং জেলা বা
            উপজেলা সমবায় অফিসার কর্তৃক প্রত্যায়িত এক কপি ছবি সংযুক্ত করিতে হইবে।
          </div>
        </div>

        {/* Form Fields */}
        <div className="fields">
          <div className="field">
            <span>০১. সদস্যের নাম :</span>
            <input className="line" />
          </div>

          <div className="field">
            <span>০২. পিতা/স্বামীর নাম :</span>
            <input className="line" />
          </div>

          <div className="field">
            <span>০৩. মাতার নাম :</span>
            <input className="line" />
          </div>

          <div className="field">
            <span>০৪. পূর্ণ ঠিকানা :</span>
            <input className="line" />
            <input className="line" />
          </div>

          <div className="field">
            <span>০৫. মোবাইল নাম্বার :</span>
            <input className="line" />
          </div>

          <div className="field">
            <span>০৬. সদস্য রেজিস্টার সদস্য নম্বর :</span>
            <input className="line" />
          </div>
        </div>

        {/* Paragraph */}
        <div className="paragraph">
          ০৭. এই পরিচয়পত্র ধারী ব্যক্তি বাংলাদেশ জাতীয় সমবায় ইউনিয়ন, সমবায়
          ব্যাংক ভবন (৮ম তলা), ৯-ডি, মতিঝিল বা/এ, ঢাকা-১০০ এর সদস্য পদে আবেদন
          করার ক্ষমতা প্রাপ্ত।
        </div>

        {/* Signature Section */}
        <div className="signature">
          <div className="signature-title">সদস্যের স্বাক্ষর :</div>

          <div className="signature-lines">
            <div>
              (০১) <input type="file" accept=".png,.jpg,.jpeg" />
            </div>
            <div>
              (০২) <input type="file" accept=".png,.jpg,.jpeg" />
            </div>
            <div>
              (০৩) <input type="file" accept=".png,.jpg,.jpeg" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div>
            প্রত্যায়ন <br />
            জেলা বা উপজেলা সমবায় অফিসারের <br />
            স্বাক্ষর ও সিল
          </div>

          <div>
            প্রতিনিধিত্ব প্রেরণকারী সমিতির <br />
            সভাপতি বা নিবন্ধ কর্তৃপক্ষ কর্তৃক <br />
            স্বাক্ষর ও সিল।
          </div>
        </div>
      </div>
    </div>
  );
}