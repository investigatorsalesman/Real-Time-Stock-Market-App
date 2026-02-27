"use client";

import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";
// TradingViewWidget.jsx
import { memo } from "react";

interface TradinViewWidgetProps {
  title?: string;
  stringUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

function TradingViewWidget({
  title,
  stringUrl,
  config,
  height = 600,
  className,
}: TradinViewWidgetProps) {
  const containerRef = useTradingViewWidget(stringUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-semibold mb-5 text-gray-100">{title}</h3>
      )}

      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">AAPL stock chart</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
