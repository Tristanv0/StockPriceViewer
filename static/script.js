function displayTradingView() {
    var symbol = document.getElementById("symbolInput").value;
    var tradingViewWidget = document.getElementById("tradingViewWidget")
    console.log(symbol)
    // Construct the TradingView widget URL
    var widgetUrl = `https://www.tradingview.com/widgetembed/?symbol=${symbol}&interval=D&hidesidetoolbar=1&symboledit=1`;
    tradingViewWidget.src = widgetUrl;
}