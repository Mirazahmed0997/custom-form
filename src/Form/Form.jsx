
import React, { useRef, useState } from "react";
import "./style.css";

export default function ExactMemberForm() {

      const [nidPreview, setNidPreview] = useState(null);
  const [signPreview, setSignPreview] = useState(null);

  const nidInputRef = useRef(null);
  const signInputRef = useRef(null);

  const handleFileChange = (e, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="page">
      <div className="paper">

        {/* ================= HEADER ================= */}
           <div className="text-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold">
            শিক্ষিত বেকার যুবক ও শ্রমজীবী সমবায় সমিতি লিঃ
          </h2>
          <p>কর্মসংস্থান ও আর্থিক বিনিয়োগ প্রকল্প</p>
          <p className="font-semibold">সমবায় আবেদন ফর্ম</p>
        </div>
       <div className="top-bar">
  {/* Date */}
  <div className="date-box">
    <span>তারিখ :</span>
    <div className="boxes">
      {[...Array(8)].map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          className="digit-box"
        />
      ))}
    </div>
  </div>

  {/* Form Title */}
  <div className="form-title">সদস্য আবেদন ফর্ম</div>

  {/* Member Number */}
  <div className="member-no">
    <span>সদস্য নং-</span>
    <div className="pm">PM</div>
    <div className="boxes">
      {[...Array(8)].map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          className="digit-box"
        />
      ))}
    </div>
  </div>
</div>

        {/* ================= SECTION 01 ================= */}
        <div className="section-title">০১. সদস্য সংক্রান্ত তথ্য :</div>

        <div className="row"><span className="label">সদস্য নাম</span><span>:</span><input className="line" /></div>
        <div className="row"><span className="label">পিতা/স্বামীর নাম</span><span>:</span><input className="line" /></div>
        <div className="row"><span className="label">মাতার নাম</span><span>:</span><input className="line" /></div>

        <div className="row address">
          <span className="label">স্থায়ী ঠিকানা</span><span>:</span>
          <div className="address-fields">
            <span>গ্রাম/মহল্লা <input className="inline-line"></input></span>
            <span>ডাকঘর <input className="inline-line"></input></span>
            <span>উপজেলা <input className="inline-line"></input></span>
            <span>জেলা <input className="inline-line"></input></span>
          </div>
        </div>

        <div className="row address">
          <span className="label">বর্তমান ঠিকানা</span><span>:</span>
          <div className="address-fields">
            <span>গ্রাম/মহল্লা <input className="inline-line"></input></span>
            <span>ডাকঘর <input className="inline-line"></input></span>
            <span>উপজেলা <input className="inline-line"></input></span>
            <span>জেলা <input className="inline-line"></input></span>
          </div>
        </div>

        <div className="row dual">
          <span className="label">মোবাইল</span><span>:</span><input className="half-line" />
          <span className="label right">ইমেইল</span><span>:</span><input className="half-line" />
        </div>

        <div className="row"><span className="label">শিক্ষাগত যোগ্যতা</span><span>:</span><input className="line" /></div>
        <div className="row"><span className="label">জাতীয় পরিচয়পত্র</span><span>:</span><input className="line" /></div>

        <div className="row dual">
          <span className="label">জন্ম তারিখ</span><span>:</span><input className="half-line" />
          <span className="label right">বয়স</span><span>:</span><input className="small-line" />
        </div>

        <div className="row dual">
          <span className="label">পেশা</span><span>:</span><input className="half-line" />
          <span className="label right">ধর্ম</span><span>:</span><input className="small-line" />
        </div>

        <div className="row dual">
          <span className="label">পেশার ঠিকানা</span><span>:</span><input className="half-line" />
          <span className="label right">বৈবাহিক অবস্থা</span><span>:</span><input className="small-line" />
        </div>

        {/* ================= SECTION 02 ================= */}
        <div className="section-title">০২. সদস্যপদের হিসাব সংক্রান্ত :</div>

        <div className="row dual">
          <span className="label">শেয়ার সংখ্যা</span><span>:</span><input className="half-line" />
          <span className="label right">সঞ্চয় মেয়াদ</span><span>:</span><input className="small-line" />
        </div>

        <div className="row dual">
          <span className="label">শেয়ার মূল্য</span><span>:</span><input className="half-line" />
          <span className="label right">মাসিক সঞ্চয় পরিমাণ</span><span>:</span><input className="small-line" />
        </div>

        {/* ================= PHOTO AREA ================= */}
         <div className="photo-section flex gap-4 mt-6">

      {/* NID Box */}
      <div className="nid-box flex flex-col items-center">
        <p>জাতীয় পরিচয়পত্র বা জন্মনিবন্ধন</p>

        {/* Hidden File Input */}
        <input
          ref={nidInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setNidPreview)}
          className="hidden"
        />

        {/* Clickable Box */}
        <div
          className="box mt-2 w-32 h-32 border flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => nidInputRef.current.click()}
        >
          {nidPreview ? (
            <img
              src={nidPreview}
              alt="nid"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>
      <div className="nid-box flex flex-col items-center">
        <p>আবেদনকারীর ছবি</p>

        {/* Hidden File Input */}
        <input
          ref={nidInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setNidPreview)}
          className="hidden"
        />

        {/* Clickable Box */}
        <div
          className="box mt-2 w-32 h-32 border flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => nidInputRef.current.click()}
        >
          {nidPreview ? (
            <img
              src={nidPreview}
              alt="nid"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>

      {/* Signature Box */}
      <div className="sign-box flex flex-col items-center">
        <p>স্বাক্ষর</p>

        {/* Hidden File Input */}
        <input
          ref={signInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setSignPreview)}
          className="hidden"
        />

        {/* Clickable Box */}
        <div
          className="box mt-2 w-32 h-32 border flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => signInputRef.current.click()}
        >
          {signPreview ? (
            <img
              src={signPreview}
              alt="signature"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>
    </div>

        {/* ================= NOMINEE ================= */}
        <div className="section-title">০৩. নমিনি সংক্রান্ত বিশেষ নির্দেশ :</div>

        <div className="row"><span className="label">নমিনির নাম</span><span>:</span><input className="line" /></div>
        <div className="row"><span className="label">পিতা/স্বামীর নাম</span><span>:</span><input className="line" /></div>
        <div className="row"><span className="label">মাতার নাম</span><span>:</span><input className="line" /></div>

        <div className="row address">
          <span className="label">বর্তমান ঠিকানা</span><span>:</span>
          <div className="address-fields">
            <span>গ্রাম/মহল্লা <input className="inline-line"></input></span>
            <span>ডাকঘর <input className="inline-line"></input></span>
            <span>উপজেলা <input className="inline-line"></input></span>
            <span>জেলা <input className="inline-line"></input></span>
          </div>
        </div>

        <div className="row"><span className="label">সম্পর্ক</span><span>:</span><input className="line" /></div>
        <div className="row"><span className="label">মোবাইল/ফোন</span><span>:</span><input className="line" /></div>

         <div className="photo-section flex gap-4 mt-6">

      {/* NID Box */}
      <div className="nid-box flex flex-col items-center">
        <p>নমিনির ছবি</p>

        {/* Hidden File Input */}
        <input
          ref={nidInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setNidPreview)}
          className="hidden"
        />

        {/* Clickable Box */}
        <div
          className="box mt-2 w-32 h-32 border flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => nidInputRef.current.click()}
        >
          {nidPreview ? (
            <img
              src={nidPreview}
              alt="nid"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>
      <div className="nid-box flex flex-col items-center">
        <p>জাতীয় পরিচয়পত্র বা জন্মনিবন্ধন</p>

        {/* Hidden File Input */}
        <input
          ref={nidInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setNidPreview)}
          className="hidden"
        />

        {/* Clickable Box */}
        <div
          className="box mt-2 w-32 h-32 border flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => nidInputRef.current.click()}
        >
          {nidPreview ? (
            <img
              src={nidPreview}
              alt="nid"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>

      {/* Signature Box */}
      <div className="sign-box flex flex-col items-center">
        <p>স্বাক্ষর</p>

        {/* Hidden File Input */}
        <input
          ref={signInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setSignPreview)}
          className="hidden"
        />

        {/* Clickable Box */}
        <div
          className="box mt-2 w-32 h-32 border flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => signInputRef.current.click()}
        >
          {signPreview ? (
            <img
              src={signPreview}
              alt="signature"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>
    </div>

       

        {/* ================= DECLARATION ================= */}
        <div className="declaration">
          <input type="checkbox" />
          <span>
            আমি এই মর্মে অঙ্গীকার করছি যে, উপরে উল্লেখিত সকল তথ্য সত্য ও সঠিক।
          </span>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="footer">
          <div>যাচাই ও অনুমোদন<br /><div className="footer-line"></div></div>
          <div>অপারেটর<br /><div className="footer-line"></div></div>
          <div>স্বাক্ষরকারীর স্বাক্ষর<br /><div className="footer-line"></div></div>
        </div>

      </div>
    </div>
  );
}

