import React from 'react';

const MembershipForm = () => {
    
  const containerStyle = {
    width: '800px',
    margin: '20px auto',
    padding: '40px',
    border: '1px solid #ccc',
    fontFamily: '"Times New Roman", Times, serif',
    lineHeight: '1.6',
    color: '#800000',
    backgroundColor: '#fff',
    fontSize: '15px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    borderBottom: '2px solid #800000',
    paddingBottom: '10px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const inputStyle = {
    borderBottom: '1px dotted #000',
    flexGrow: 1,
    marginLeft: '5px',
    minHeight: '20px',
  };

  return (
    <div className='form' style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '60px', height: '60px', border: '1px solid #000', borderRadius: '50%', marginRight: '15px' }}>
            {/* Logo Placeholder */}
            <span style={{ fontSize: '10px' }}>LOGO</span>
          </div>
          <div>
            <h1 style={{ margin: 0, color: '#800000', fontSize: '28px' }}>বাংলাদেশ জাতীয় সমবায় ইউনিয়ন</h1>
            <p style={{ margin: 0, fontSize: '12px' }}>
              নিবন্ধন নং- ৩৪, তারিখ: ১৬.০৬.১৯৬১ খ্রি. (সংশোধিত) নং-০১, তারিখ: ০৭.০৭.২০২৫ খ্রি.
            </p>
            <p style={{ margin: 0, fontSize: '12px' }}>
              কার্যালয় সমবায় ব্যাংক ভবন (৮ম তলা), ৯/ডি, মতিঝিল বা/এ, ঢাকা-১০০০।
            </p>
            <p style={{ margin: 0, fontSize: '12px' }}>
              ই-মেইল: bjsu61@gmail.com, মোবাইল: ০১৭১৬৬৫৩৫৯৯
            </p>
          </div>
        </div>
      </div>

      {/* Reference and Date */}
      <div style={rowStyle}>
        <div>স্মারক নং- <input style={{ borderBottom: '1px dotted #000', width: '200px', display: 'inline-block' }}></input></div>
        <div>তারিখ : <input style={{ borderBottom: '1px dotted #000', width: '150px', display: 'inline-block' }}></input></div>
      </div>

      <h2 style={{ textAlign: 'center', textDecoration: 'underline', marginTop: '20px' }}>সদস্য পদের আবেদন ফরম</h2>

      {/* Recipient */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ margin: 0 }}>সভাপতি/সম্পাদক</p>
        <p style={{ margin: 0 }}>বাংলাদেশ জাতীয় সমবায় ইউনিয়ন,</p>
        <p style={{ margin: 0 }}>সমবায় ব্যাংক ভবন,</p>
        <p style={{ margin: 0 }}>৯-ডি, মতিঝিল বাণিজ্যিক এলাকা, ঢাকা-১০০০</p>
      </div>

      <p>জনাব,</p>

      {/* Personal Info Section */}
      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex' }}>
          আমি (নাম) : <input style={inputStyle}></input> পিতা : <input style={inputStyle}></input>
        </div>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          মাতা : <input style={inputStyle}></input> গ্রাম : <input style={inputStyle}></input> ডাকঘর: <input style={inputStyle}></input>
        </div>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          উপজেলা : <input style={inputStyle}></input> জেলা : <input style={inputStyle}></input> সমিতিতে পদবী : <input style={inputStyle}></input>
        </div>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <input style={inputStyle}></input> জেলার অন্তর্গত, সমিতির নাম : <input style={inputStyle}></input> লি: এর পক্ষে
        </div>
      </div>

      <p style={{ textAlign: 'justify' }}>
        জানাইতেছি যে, আমাদের সমিতি বাংলাদেশ জাতীয় সমবায় ইউনিয়ন এর সদস্যভুক্ত হইতে ইচ্ছুক এবং সদস্য পদের জন্য ভর্তি ফি বাবদ ২,০০০/-(দুই হাজার) টাকা এবং বার্ষিক চাঁদা ১,০০০/-(এক হাজার) টাকা সর্বমোট ৩০০০/-(তিন হাজার) টাকা এবং বাংলাদেশ জাতীয় সমবায় ইউনিয়ন এর ব্যাংক হিসাব নং ০০৬৭০১০০০৩৯৯৭, রূপালী ব্যাংক পিএলসি, ফরেন এক্সচেঞ্জ কর্পোরেট ব্রাঞ্চ ঢাকা, জমা করে জমার রশিদ সংযুক্ত করেছি।
      </p>

      <p style={{ textAlign: 'justify' }}>
        আমরা বাংলাদেশ জাতীয় সমবায় ইউনিয়ন এর উপ-আইন, সমবায় সমিতি আইন, ২০০১ (সংশোধিত ২০০২,২০১৩) ও সমবায় সমিতি বিধিমালা, ২০০৪ (সংশোধিত ২০২০) মানিয়া চলিতে সম্মত আছি।
      </p>

      {/* Committee Table/List Section */}
      <div style={{ marginTop: '20px' }}>
        {[
          "১. সমিতির নাম",
          "২. সমিতির নিবন্ধিত ঠিকানা",
          "৩. বর্তমান ঠিকানা",
          "৪. যোগাযোগের মোবাইল নম্বর সমিতির",
          "৫. সভাপতি",
          "৬. সম্পাদক",
          "৭. সমিতির রেজিস্ট্রেশন নং",
          "৮. সমিতির শ্রেণি",
          "৯ . সমিতির সদস্য সংখ্যা",
          "১০. সমিতির সদস্য নির্বাচনী ও কর্ম এলাকা",
          "১১. মনোনীত সদস্যের পরিচয়পত্র (সংযুক্ত)",
          "১২. সমিতি জেলা সমবায় ইউনিয়নের সদস্যভুক্ত/সদস্যভুক্ত নহে"
        ].map((label, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '8px',textAlign:"left" }}>
            <span style={{ minWidth: '250px' }}>{label}</span>
            <span style={{ marginRight: '10px' }}> : </span>
            <input style={inputStyle}></input>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '150px', height: '80px', border: '1px dashed #ccc', marginBottom: '5px' }}></div>
          <p>সমিতির সীলমোহর</p>
        </div>
        <div style={{ width: '300px' }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>আপনার বিশ্বস্ত</p>
          <p style={{ textAlign: 'center', fontSize: '12px' }}>সমিতির পক্ষে মনোনীত সদস্যের নাম ও স্বাক্ষর</p>
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex' }}>স্বাক্ষর : <input style={inputStyle}></input></div>
            <div style={{ display: 'flex', marginTop: '5px' }}>নাম : <input style={inputStyle}></input></div>
            <div style={{ display: 'flex', marginTop: '5px' }}>পদবী : <input style={inputStyle}></input></div>
            <div style={{ display: 'flex', marginTop: '5px' }}>মোবাইল নম্বর : <input style={inputStyle}></input></div>
            <div style={{ display: 'flex', marginTop: '5px' }}>তারিখ : <input style={inputStyle}></input></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;