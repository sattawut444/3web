import Image from "next/image";
import { Inter } from "next/font/google";

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // เรียกใช้งานฟังก์ชัน handleResize เมื่อ component โหลดเสร็จ

    return () => window.removeEventListener('resize', handleResize);
  }, []); // ใช้ useEffect ดักจับการเปลี่ยนขนาดหน้าจอ

  return (
    <>
    {/* // Logo */}
    <div style={{ zIndex: 5, display: 'flex', backgroundColor: 'black', position: 'fixed', top:0, width: '100%', boxShadow: '0px 2px 9px rgba(0, 0, 0, 5)'}}>
      <div style={{ flex: 1 }}>
      <Image style={{ margin: '1% 0% 1% 10%' }}
              src="/image/LOGO-2 1.png"
              alt="Vercel Logo"
              width={60}
              height={24}
              priority
            />
      </div>
      {/* // Nevbar */}
      <div style={{ flex: 1, paddingRight: '5%', display: 'flex', justifyContent: 'right', alignItems: 'center', backgroundColor: 'black'}}>
        <svg style={{ marginRight: '1%' }} xmlns="http://www.w3.org/2000/svg" height="20" width="21.25" viewBox="0 0 576 512">
          <path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
        <a className="a" href="news">
          <span className="Navbar" style={{ zIndex: 4 }}>หน้าแรก</span>
        </a>
        <svg style={{ marginRight: '1%' }} xmlns="http://www.w3.org/2000/svg" height="20" width="21.75" viewBox="0 0 576 512">
          <path fill="#ffffff" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
        </svg>
        <a className="a" href="news">
          <span className="Navbar" style={{ zIndex: 4 }}>บริการ</span>
        </a>
        <svg style={{ marginRight: '1%' }} xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
          <path fill="#ffffff" d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 84c-11 0-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104c0-11-9-20-20-20zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z"/>
        </svg>
        <a className="a" href="news">
          <span className="Navbar" style={{ zIndex: 4 }}>ชำระเงิน</span>
        </a>
        <svg style={{ marginRight: '1%' }} xmlns="http://www.w3.org/2000/svg" height="20" width="18.25" viewBox="0 0 448 512">
          <path fill="#ffffff" d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/>
        </svg>
        <a className="a" href="news">
          <span className="Navbar" style={{ zIndex: 4 }}>ติดต่อเรา</span>
        </a>
      </div>
    </div>
    {/* // หัวเรื่อง */}
    <div className="bodyDev">
        <img className="bodyImage"src="/image/imageDev.png" width="100%" height="auto" />
        <img className="bodyLogo"src="/image/3 web.png" height="auto" />
      <div style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '9%' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="bodyFont1">
            รับออกแบบทำเว็บไซต์ให้ตอบโจทย์ธุรกิจทุกระดับ
          </h1>
          <p className="bodyFont2">
            ตัวช่วยเรื่องธุรกิจของคุณ ไม่ว่าธุรกิจขนาดเล็กหรือใหญ่ เราพร้อมสร้างสรรค์ต่อยอดจินตนาการให้เกิดขึ้นจริง
          </p>
        </div>
      </div>
    </div>
    <div className="bodyDev2">
      <div className="menuDev">
            <p className='menuFont'>BUSINESS</p>
            <p className='menuFont'>E-COMMERCE</p>
            <p className='menuFont3'>CORPORATE</p>
      </div>
      <div className="ImageDev">
        <img src="/image/menu.png" width={1500} height="auto" />
      </div>
      <div class="contentDev">
          <img className="box1"src="/image/3web2.png" height="auto" />
          <div class="box2">
            <h1 className='contentFont1'>รับออกแบบทำเว็บไซต์</h1>
            <p className='contentFont2'>เน้นความสวยงาม เรียบง่าย เป็นเอกลักษณ์</p>
            <p className='contentFont3'>เพิ่มความน่าสนใจใน ธุรกิจ Community แหล่งเรียนรู้ ข้อมูลข่าวสาร</p>
            <p className='contentFont3'>รับทำเว็บไซต์และออกแบบเว็บไซต์ทุกประเภท เน้นความสวยงาม การสือสารแบรนด์และออกแบบตรงกลุ่มเป้าหมาย</p>
          </div>
      </div>
      <div className='detailDev'>
        <h1 className='detailFont1'>รวดเร็ว ตรงเวลา เข้าใจง่าย</h1>
        <h1 className='detailFont2'>รับทำเว็บไซต์  ระยะเวลาการทำงานชัดเจน แนะนำข้อมูลที่ลงเว็บไซต์ เข้าใจจุดประสงค์ลูกค้า</h1>
        <h1 className='detailFont2'>ค่าธรรมเนียมเซิร์ฟเวอร์ สอนปรับแก้ไขเว็บไซต์ วางแผนออกแบบเว็บไซต์</h1>
      </div>
      <div className='priceDev'>
        <h1 className='priceFont'>เลือกบริการออกแบบเว็บไซต์ที่เหมาะกับธุรกิจคุณ</h1>
        <img className="priceIcon"src="/image/icon-vector.png" height="auto" />
      </div>
      <div className="priceDev2">
        {/* Box1 */}
        <div className="priceBox1">
          <h1 className="priceBoxFont1">Website Package</h1>
          <p className="priceBoxFont2">เหมาะสำหรับธุรกิจ SME ขนาดเล็ก-กลาง</p>
          <p className="priceBoxFont2">การนำเสนอสินค้า/บริการ/บริษัท</p>
          <p className="priceBoxFont2">ที่มีข้อมูลไม่มาก เน้นนำเสนอเรื่องใดเรื่องหนึ่ง</p>
          <p className="priceBoxFont2">เช่น ข้อมูลสินค้า ข้อมูลบริการ เป็นต้น</p>
          <h1 className="priceBoxFont3">ราคา 2,999 บาท</h1>
          <ul>
            <li className="ulColor1">ออกแบบเว็บไซต์ 1 หน้า</li>
            <li className="ulColor1">รองรับ 1 ภาษา</li>
            <li>ทั้งบนเวอร์ชั่น Desktop และ Mobile</li>
            <li>ปุ่ม Contact เชื่อมต่อทุก Social media</li>
            <li className="ulColor1">เมนูหัวข้อ 5 เมนู</li>
            <li>ปรับแก้แบบดีไซต์จนกว่าจะแล้วเสร็จ</li>
            <li className="ulColor1">แบนเนอร์/ภาพสไลด์ ในเว็บไซต์ 6 ภาพ</li>
            <li>ลงข้อมูลประกอบเว็บไซต์ พร้อมใช้งาน</li>
            <li className="ulColor2">จดโดเมน ฟรี 1 ปีแรก *ต่ออายุปีถัดไป 2,000 บาท</li>
          </ul>
        </div>
        {/* Box2 */}
        <div className="priceBox1">
          <h1 className="priceBoxFont1">Website Package v.2</h1>
          <p className="priceBoxFont2">เหมาะสำหรับธุรกิจ SME ขนาดเล็ก-กลาง</p>
          <p className="priceBoxFont2">การนำเสนอสินค้า/บริการ/บริษัท</p>
          <p className="priceBoxFont2">ที่มีข้อมูลไม่มาก เน้นนำเสนอเรื่องใดเรื่องหนึ่ง</p>
          <p className="priceBoxFont2">เช่น ข้อมูลสินค้า ข้อมูลบริการ เป็นต้น</p>
          <h1 className="priceBoxFont3">ราคา 4,999 บาท</h1>
          <ul>
            <li className="ulColor1">ออกแบบเว็บไซต์ 5 หน้า</li>
            <li className="ulColor1">รองรับ 2 ภาษา</li>
            <li>ทั้งบนเวอร์ชั่น Desktop และ Mobile</li>
            <li>ปุ่ม Contact เชื่อมต่อทุก Social media</li>
            <li className="ulColor1">เมนูหัวข้อ 8 เมนู</li>
            <li>ปรับแก้แบบดีไซต์จนกว่าจะแล้วเสร็จ</li>
            <li className="ulColor1">แบนเนอร์/ภาพสไลด์ ในเว็บไซต์ 30 ภาพ</li>
            <li>ลงข้อมูลประกอบเว็บไซต์ พร้อมใช้งาน</li>
            <li className="ulColor2">จดโดเมน ฟรี 1 ปีแรก *ต่ออายุปีถัดไป 2,000 บาท</li>
          </ul>
        </div>
        {/* Box3 */}
        <div className="priceBox1">
          <h1 className="priceBoxFont1">ออกแบบเว็ปไซต์ V.1</h1>
          <p className="priceBoxFont5">เหมาะสำหรับกลุามลูกค้าที่ต้องการให้ทีมงาน</p>
          <p className="priceBoxFont5">ออกแบบเว็บไซต์ (figma) เพียงอย่างเดียว</p>
          <h1 className="priceBoxFont3">ราคา 799 บาท</h1>
          <ul>
            <li className="ulColor1">ออกแบบเว็บไซต์ 1 หน้า</li>
            <li className="ulColor1">รองรับ 1 ภาษา</li>
            <li className="ulColor1">เมนูหัวข้อ 5 เมนู</li>
            <li className="ulColor1">แบนเนอร์ 6 ภาพ</li>
          </ul>
          <h1 className="priceBoxFont1">ออกแบบเว็ปไซต์ V.2</h1>
          <h1 className="priceBoxFont3">ราคา 1,499 บาท</h1>
          <ul>
            <li className="ulColor1">ออกแบบเว็บไซต์ 5 หน้า</li>
            <li className="ulColor1">รองรับ 2 ภาษา</li>
            <li className="ulColor1">เมนูหัวข้อ 5 เมนู</li>
            <li className="ulColor1">แบนเนอร์ 30 ภาพ</li>
          </ul>
        </div>
      </div>
      <div className="textDev">บริการเสริม
      </div>
      <div className="textbox1">
        <div className="textbox">
            <p className="textFont">ระบบขายสินค้า พร้อมระบบแจ้งโอนเงิน</p>
          <div className="textbox2">
            <h1 className="textFont2">3,000 บาท</h1>
          </div>
        </div>
        {/* ติดต่อ */}
        <div className="contactDev">
            <img className="contactImage"src="/image/contactImage.png" width="100%" height="auto" />
            <p className="contactText">
              Tel: 096-820-2695, 065-650-8749 (24 Hr.)<br></br> 
              Email: 3webofficial@gmail.com<br></br>
              ID: @806ekezv
            </p>
        </div>
        <div className="contactBox">
          <p className="contactBoxText">© 2024 3webofficial. All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyComponent;
