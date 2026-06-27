let balance = 10000;
let correctUser = "admin";
let correctPin = "1234";

function login() {
  let user = document.getElementById("userId").value;
  let pin = document.getElementById("pin").value;

  if (user === correctUser && pin === correctPin) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Invalid Credentials!";
  }
}

function updateBalance() {
  document.getElementById("balance").innerText = balance;
}

function addHistory(text) {
  let li = document.createElement("li");
  li.innerText = text;
  document.getElementById("historyList").appendChild(li);
}

/* DEPOSIT */
function deposit() {
  let amt = Number(document.getElementById("depositAmount").value);

  if (amt > 0) {
    balance += amt;
    updateBalance();
    addHistory(`Deposited ₹${amt}`);
  }
}

/* WITHDRAW */
function withdraw() {
  let amt = Number(document.getElementById("withdrawAmount").value);

  if (amt > 0 && amt <= balance) {
    balance -= amt;
    updateBalance();
    addHistory(`Withdrawn ₹${amt}`);
  } else {
    alert("Insufficient Balance!");
  }
}

/* TRANSFER */
function transfer() {
  let amt = Number(document.getElementById("transferAmount").value);
  let receiver = document.getElementById("receiver").value;

  if (amt > 0 && amt <= balance && receiver !== "") {
    balance -= amt;
    updateBalance();
    addHistory(`Transferred ₹${amt} to ${receiver}`);
  } else {
    alert("Invalid Transfer!");
  }
}

/* LOGOUT */
function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}