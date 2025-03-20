import React, { useEffect, useRef } from "react";
import { AreaSeries, createChart, ColorType } from "lightweight-charts";

const getCSSVariable = (variable) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};

function AreaChartComponent(props) {
  const {
    data,
    colors: {
      backgroundColor = getCSSVariable("--area-chart-bg"),
      lineColor = getCSSVariable("--area-chart-line"),
      textColor = getCSSVariable("--area-chart-text"),
      areaTopColor = getCSSVariable("--area-chart-top"),
      areaBottomColor = getCSSVariable("--area-chart-bottom"),
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
      crosshair: {
        mode: 0,
        vertLine: {
          color: getCSSVariable("--area-chart-crosshair"),
          width: 1,
          style: 2,
          labelBackgroundColor: getCSSVariable("--area-chart-label"),
        },
        horzLine: {
          color: getCSSVariable("--area-chart-crosshair"),
          width: 1,
          style: 2,
          labelBackgroundColor: getCSSVariable("--area-chart-label"),
        },
      },
      grid: {
        vertLines: false,
        horzLines: false,
      },
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addSeries(AreaSeries, {
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
}

export default AreaChartComponent;
