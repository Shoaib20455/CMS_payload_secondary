"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type StateFormData = {
  name: string;
  email: string;
  state: string;
};

export default function StatePickerCard() {
  const [formData, setFormData] = useState<StateFormData>({ name: "", email: "", state: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (formData.name && formData.email && formData.state) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: "", email: "", state: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* Desktop State Picker Card */}
        <div className="bb-state-picker-001" />

        <div className="bb-state-picker-002">
          Pick Your State
        </div>

        {/* Dropdown Select State */}
        <div className="bb-state-picker-003">
          <select
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            required
            className="bb-state-picker-004">
            
            <option value="" disabled hidden>View Your State</option>
            {["Alabama", "California", "Florida", "Georgia", "Illinois", "North Carolina", "South Carolina", "Texas", "Tennessee", "Virginia"].map((st) =>
            <option key={st} value={st}>{st}</option>
            )}
          </select>

          <div className="bb-state-picker-005">
            <Image className="bb-state-picker-006" src="/Icons/Polygon 16.svg" alt="Dropdown Arrow" width={11} height={9} unoptimized />
          </div>
        </div>

        {/* Name Input */}
        <div className="bb-state-picker-007">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bb-state-picker-008" />
          
        </div>

        {/* Email Input */}
        <div className="bb-state-picker-009">
          <input
            type="email"
            placeholder="Youremail@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bb-state-picker-008" />
          
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bb-state-picker-010">
          
          Submit
        </button>

        <div
          className="bb-state-picker-011" />
        

        <div
          className="bb-state-picker-012">
          
          <div className="bb-state-picker-013">
            <div className="bb-state-picker-014">
              Pick Your State
            </div>

            <div className="bb-state-picker-015">
              <div className="bb-state-picker-016">
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
                  className="bb-state-picker-017">
                  
                  <option value="" disabled hidden>View Your State</option>
                  {["Alabama", "California", "Florida", "Georgia", "Illinois", "North Carolina", "South Carolina", "Texas", "Tennessee", "Virginia"].map((st) =>
                  <option key={st} value={st}>{st}</option>
                  )}
                </select>

                <div className="bb-state-picker-018">
                  <Image className="bb-state-picker-019" src="/Icons/Polygon 16.svg" alt="Dropdown Arrow" width={11} height={9} unoptimized />
                </div>
              </div>

              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bb-state-picker-020" />
              

              <input
                type="email"
                placeholder="Youremail@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bb-state-picker-020" />
              

              <button
                type="submit"
                className="bb-state-picker-021">
                
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {formSubmitted &&
      <>
          <div className="bb-state-picker-022">
            Thank you! Your request for state coverage has been submitted successfully.
          </div>
          <div
          className="bb-state-picker-023">
          
            <div className="bb-state-picker-024">
              Thank you! Your request for state coverage has been submitted successfully.
            </div>
          </div>
        </>
      }
    </>);

}
