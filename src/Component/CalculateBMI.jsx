import React, { useState } from 'react';
import overweight from "../assets/overweight.png"
import obesity3 from "../assets/obesity3.png";
import normalweight from "../assets/normalweight.png";
import under from "../assets/underweight.png";




function CalculateBMI() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [idealWeight, setIdealWeight] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  const calculateBMI = () => {
    if (!weight || !height || height <= 0) return;

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
    const idealMin = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const idealMax = (24.9 * heightInMeters * heightInMeters).toFixed(1);

    setBmi(bmiValue);
    setIdealWeight(`${idealMin} - ${idealMax} كجم`);

    let categoryText = '';
    let image = '';

    if (bmiValue < 18.5) {
      categoryText = 'وزنك منخفض';
      image = under; 
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      categoryText = 'وزنك طبيعي ومثالي!';
      image = normalweight; 
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      categoryText = 'وزنك مرتفع (زيادة وزن)';
      image = overweight
    } else {
      categoryText = 'وزنك مرتفع جداً (سمنة)';
      image = obesity3; 
    }

    setCategory(categoryText);
    setImageSrc(image);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg flex flex-col justify-center  text-center h-screen my-10">
      <h2 className="text-2xl font-bold mb-4">حاسبة كتلة الجسم</h2>

      <div className="mb-4 flex gap-4 justify-center ">
        <div>
        <label className="block text-left mb-2">الوزن (كجم)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
          placeholder="أدخل وزنك بالكيلوجرام"
        />
</div>
<div>
        <label className="block text-left mb-2">الطول (سم)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="أدخل طولك بالسنتيمتر"
        />
      </div>
</div>
      <button
        onClick={calculateBMI}
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-black-700 transition"
      >
        احسب كتلة الجسم
      </button>

      {bmi && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">كتلة الجسم: <span className="text-blue-600">{bmi}</span></h3>
          <p className={`text-lg mt-2 ${category.includes('مرتفع') ? 'text-red-600' : category.includes('مثالي') ? 'text-green-600' : 'text-yellow-600'}`}>
            {category}
          </p>
          <p className="mt-2">الوزن المثالي: {idealWeight}</p>

          {imageSrc && (
            <div className="mt-4">
              <img src={imageSrc} alt="جسم الإنسان" className="mx-auto max-h-48" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CalculateBMI