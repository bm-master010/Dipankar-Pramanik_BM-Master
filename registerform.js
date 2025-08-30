document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const otp = document.getElementById("otp").value;
    const errorElement = document.getElementById("error");
  
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    // Clear previous error
    errorElement.innerText = "";
  
    // Check for empty fields
    if (!fullname || !mobile || !email || !username || !password) {
      errorElement.innerText = "All fields are required!";
      return;
    }
  
    // Validate username (letters and numbers only)
    if (!usernameRegex.test(username)) {
      errorElement.innerText = "Username must contain only letters and numbers!";
      return;
    }
  
    // Validate password
    if (!passwordRegex.test(password)) {
      errorElement.innerText = "Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.";
      return;
    }
  
    // Validate OTP
    if (!otp || otp !== generatedOtp) {
      errorElement.innerText = "Invalid OTP. Please try again!";
      return;
    }
  
    // If all validations pass
    alert("Registration successful!");
  
    // Clear the form
    document.getElementById("registerForm").reset();
  
    // Hide OTP input field after form submission
    document.querySelector(".otp-group").style.display = "none";
  
    // Clear the generated OTP after successful submission
    generatedOtp = '';
  });
  
  // OTP generation and validation
  let generatedOtp = '';
  
  document.getElementById("requestOtpBtn").addEventListener("click", function() {
    const mobile = document.getElementById("mobile").value;
    const errorElement = document.getElementById("error");
  
    if (!mobile) {
      errorElement.innerText = "Please enter a mobile number before requesting OTP!";
      return;
    }
  
    // Simulating OTP generation (in a real scenario, this would be sent via SMS)
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`OTP sent to your mobile number: ${generatedOtp}`); // Simulate sending OTP
  
    // Display the OTP input field
    document.querySelector(".otp-group").style.display = "block";
  });
  