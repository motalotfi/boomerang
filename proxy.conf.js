const PROXY_CONFIG = [
  {
    context: ["/api", "/odata", "/signalr", "/InvokeLogin", "/InvokeLogout", "/Metadata", "/Files", "/SignIn", "/SignOut", "/ClientAppProfile", "/core", "/jobs",, "/media"],
    target: "http://localhost:7210",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
