document.addEventListener("DOMContentLoaded", function () {
  const accountBox = document.getElementById("account-box");


  if (localStorage.getItem("currentUser")) {
    accountBox.innerHTML = `
      <h2>Welcome, ${localStorage.getItem("currentUser")}</h2>
      <button id="logoutBtn">Logout</button>
    `;
    document.getElementById("logoutBtn").addEventListener("click", logout);
  } else {
    showLogin();
  }

  function showRegister() {
    accountBox.innerHTML = `
      <h2>Register</h2>
      <form id="registerForm">
        <input type="text" id="regName" placeholder="Full Name" required>
        <input type="email" id="regEmail" placeholder="Email" required>
        <input type="password" id="regPassword" placeholder="Password" required>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="#" id="toLogin">Login</a></p>
    `;

    document.getElementById("toLogin").addEventListener("click", showLogin);

    document.getElementById("registerForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("regName").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.find(u => u.email === email)) {
        alert("Email already exists!");
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful! Please login.");
      showLogin();
    });
  }

  function showLogin() {
    accountBox.innerHTML = `
      <h2>Login</h2>
      <form id="loginForm">
        <input type="email" id="loginEmail" placeholder="Email" required>
        <input type="password" id="loginPassword" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" id="toRegister">Register</a></p>
    `;

    document.getElementById("toRegister").addEventListener("click", showRegister);

    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("currentUser", user.name);
        location.reload();
      } else {
        alert("Invalid email or password");
      }
    });
  }

  function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
  }

  // Expose functions globally
  window.showRegister = showRegister;
  window.showLogin = showLogin;
  window.logout = logout;
});
