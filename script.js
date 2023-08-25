const ipv4AddressElement = document.getElementById("ipv4-address");
const ipv6AddressElement = document.getElementById("ipv6-address");
const ipLocationElement = document.getElementById("ip-location");
const ispElement = document.getElementById("isp");
const cityElement = document.getElementById("city");
const timeZoneElement = document.getElementById("time-zone");

const copyIpv4Button = document.getElementById("copy-ipv4");
const copyIpv6Button = document.getElementById("copy-ipv6");

// Fetch IPv4 address
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    ipv4AddressElement.textContent = data.ip;
    copyIpv4Button.addEventListener("click", () => {
      copyToClipboard(data.ip);
      alert("IPv4 address copied to clipboard!");
    });
  })
  .catch(error => {
    ipv4AddressElement.textContent = "Failed to fetch IPv4 address.";
  });

// Fetch IPv6 address
fetch("https://ipv6.icanhazip.com")
  .then(response => response.text())
  .then(data => {
    ipv6AddressElement.textContent = data.trim();
    copyIpv6Button.addEventListener("click", () => {
      copyToClipboard(data.trim());
      alert("IPv6 address copied to clipboard!");
    });
  })
  .catch(error => {
    ipv6AddressElement.textContent = "Failed to fetch IPv6 address.";
  });

// Fetch IP location information
fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    ipLocationElement.textContent = "My IP Location is: " + data.country_name;
    ispElement.textContent = "My ISP is: " + data.org;
    cityElement.textContent = "City: " + data.city;
    timeZoneElement.textContent = "Time Zone: " + data.timezone;
  })
  .catch(error => {
    ipLocationElement.textContent = "Failed to fetch IP location information.";
    ispElement.textContent = "Failed to fetch ISP information.";
    cityElement.textContent = "Failed to fetch city information.";
    timeZoneElement.textContent = "Failed to fetch time zone information.";
  });

// Function to copy text to clipboard
function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
