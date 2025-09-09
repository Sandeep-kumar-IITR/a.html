import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "CreditCardForm.css"; // custom CSS for arrows
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const [step, setStep] = useState(1);
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const formRef = useRef(null);
const [formData, setFormData] = useState({
  customerId: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  phone: "",
  dob: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  employment: "",
  income: "",
  pan: "",
  aadhaar: "",
  panFile: null,
  aadhaarFile: null,
  incomeProofType: "",
  incomeProofFile: null,
  cardType: "",
  limit: "",
  lifestyle: "",
  cardProvider: "",
  termsAccepted: false,
  infoConfirmed: false,
  docsConfirmed: false,
});



  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        setStep(step + 1);
      } else {
        formRef.current.reportValidity();
      }
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }
    console.log("Form Data Submitted:", formData);
    alert("🎉 Your credit card application has been submitted!");
  };

  const steps = [
    "Existing Customer",
    "Personal Info",
    "Address Info",
    "Documents",
    "Card Details",
    "Terms & Submit",
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg border-0" style={{ width: "650px" }}>
        <div className="card-header text-center bg-primary text-white">
          <h4 className="mb-0">Credit Card Application</h4>
        </div>

        {/* Stepper Navigation */}
       <div className="p-3 bg-light border-bottom">
  <div className="d-flex justify-content-between align-items-center">
    {steps.map((label, index) => {
      const stepNumber = index + 1;
      const isActive = step === stepNumber;
      const isCompleted = step > stepNumber;

      return (
        <div key={index} className="step-wrapper">
          {/* Circle */}
          <div
            className={`step-circle ${
              isActive
                ? "active"
                : isCompleted
                ? "completed"
                : "pending"
            }`}
          >
            {stepNumber}
          </div>
          <small className="step-label">{label}</small>

          {/* Connector */}
          {index < steps.length - 1 && (
            <div
              className={`step-connector ${
                isCompleted ? "completed" : ""
              }`}
            >
              <span className="arrow">→</span>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

        <div className="card-body p-4" style={{ minHeight: "450px" }}>
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="existingCustomer"
                    checked={isExistingCustomer}
                    onChange={(e) => setIsExistingCustomer(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="existingCustomer">
                    Are you an existing customer?
                  </label>
                </div>

                {isExistingCustomer && (
                  <div className="mb-3">
                    <input
                      type="text"
                      name="customerId"
                      value={formData.customerId}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Customer ID"
                      required
                    />
                  </div>
                )}

                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={nextStep}
                >
                  Next →
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
  <>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="First Name"
      required
    />
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Last Name"
      required
    />
    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="form-select mb-3"
      required
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Email"
      required
    />
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Mobile Number"
      required
      pattern="[0-9]{10}"
      title="Enter a valid 10-digit mobile number"
    />
    <input
      type="date"
      name="dob"
      value={formData.dob}
      onChange={handleChange}
      className="form-control mb-3"
      required
    />

    <div className="d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={prevStep}
      >
        ← Back
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={nextStep}
      >
        Next →
      </button>
    </div>
  </>
)}


            {/* STEP 3 */}
            {step === 3 && (
              <>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Current Address"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="City"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="State"
                  required
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Pincode"
                  required
                />
                <input
                  type="text"
                  name="employment"
                  value={formData.employment}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Employment Type"
                  required
                />
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Annual Income"
                  required
                />

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={prevStep}
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextStep}
                  >
                    Next →
                  </button>
                </div>
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="PAN Number"
                  required
                />
                <input
                  type="file"
                  name="panFile"
                  onChange={handleChange}
                  className="form-control mb-3"
                  accept="application/pdf"
                  required
                />
                <input
                  type="text"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Aadhaar Number"
                  required
                />
                <input
                  type="file"
                  name="aadhaarFile"
                  onChange={handleChange}
                  className="form-control mb-3"
                  accept="application/pdf"
                  required
                />

                <select
                  name="incomeProofType"
                  value={formData.incomeProofType}
                  onChange={handleChange}
                  className="form-select mb-3"
                  required
                >
                  <option value="">Select Income Document</option>
                  <option value="itr">Income Tax Return</option>
                  <option value="gst">GST Certificate</option>
                  <option value="incomeCertificate">Income Certificate</option>
                  <option value="student">Student</option>
                </select>
                <input
                  type="file"
                  name="incomeProofFile"
                  onChange={handleChange}
                  className="form-control mb-3"
                  accept="application/pdf"
                  required
                />

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={prevStep}
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextStep}
                  >
                    Next →
                  </button>
                </div>
              </>
            )}

            {/* STEP 5 */}
{/* STEP 5 */}
{step === 5 && (
  <>
    <select
      name="cardType"
      value={formData.cardType}
      onChange={handleChange}
      className="form-select mb-3"
      required
    >
          <option value="">Card Type</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="platinum">Platinum</option>
          <option value="titanium">Titanium</option>
    </select>

    <input
      type="number"
      name="limit"
      value={formData.limit}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Preferred Credit Limit"
      required
    />

    <select
      name="lifestyle"
      value={formData.lifestyle || ""}
      onChange={handleChange}
      className="form-select mb-3"
      required
    >
     <option value="">Lifestyle</option>
          <option value="shopping">Shopping</option>
          <option value="travel">Travel</option>
          <option value="premium">Premium</option>
          <option value="student">Student</option>
    </select>

    <select
      name="cardProvider"
      value={formData.cardProvider || ""}
      onChange={handleChange}
      className="form-select mb-3"
      required
    >
      <option value="">Select Card Provider</option>
      <option value="visa">Visa</option>
      <option value="mastercard">MasterCard</option>
      <option value="rupay">RuPay</option>
      <option value="amex">American Express</option>
    </select>

    <div className="d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={prevStep}
      >
        ← Back
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={nextStep}
      >
        Next →
      </button>
    </div>
  </>
)}
{/* STEP 6 */}
{step === 6 && (
  <div className="p-3 ">
    <div className="d-flex align-items-start mb-2">
      <input
        className="form-check-input me-2 mt-1"
        type="checkbox"
        name="infoConfirmed"
        checked={formData.infoConfirmed || false}
        onChange={(e) =>
          setFormData({ ...formData, infoConfirmed: e.target.checked })
        }
        required
      />
      <label className="form-check-label">
        I confirm that all information provided is accurate and complete.
      </label>
    </div>

    <div className="d-flex align-items-start mb-2">
      <input
        className="form-check-input mt-1"  // removed me-2
        type="checkbox"
        name="docsConfirmed"
        checked={formData.docsConfirmed || false}
        onChange={(e) =>
          setFormData({ ...formData, docsConfirmed: e.target.checked })
        }
        required
      />
      <label className="form-check-label ms-2">
        I confirm that all submitted documents are genuine. 
      </label>
    </div>

    <div className="d-flex align-items-start mb-3">
      <input
        className="form-check-input me-2 mt-1"
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleChange}
        required
      />
      <label className="form-check-label">
        I accept the{" "}
        <a href="#!" className="text-primary">
          Terms & Conditions
        </a>
      </label>
    </div>

    <div className="d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={prevStep}
      >
        ← Back
      </button>
      <button type="submit" className="btn btn-success">
        Submit ✔
      </button>
    </div>
  </div>
)}




          </form>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
