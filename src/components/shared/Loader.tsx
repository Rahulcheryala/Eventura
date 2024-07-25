"use client";

import React, { useState, useEffect } from "react";

type ShapeConfig = {
  top: string;
  left: string;
  height: string;
  width: string;
  backgroundColor: string;
  position: string;
  transitionProperty: string;
  transitionDuration: string;
  transitionTimingFunction: string;
  borderRadius?: string;
  borderBottomLeftRadius?: string;
  borderTopRightRadius?: string;
  borderTopLeftRadius?: string;
};

type Configurations = {
  [key: string]: {
    shape1: ShapeConfig;
    shape2: ShapeConfig;
    shape3: ShapeConfig;
    shape4: ShapeConfig;
    shape5: ShapeConfig;
    shape6: ShapeConfig;
    shape7: ShapeConfig;
  };
};

const Loader = () => {
  const configurations: Configurations = {
    config_2: {
      shape1: {
        top: "0",
        left: "0",
        height: "50%",
        width: "20%",
        backgroundColor: "#ffa69e",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape2: {
        top: "0",
        left: "20%",
        height: "50%",
        width: "30%",
        backgroundColor: "#faf3dd",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape3: {
        top: "0",
        left: "50%",
        height: "100%",
        width: "50%",
        backgroundColor: "#b8f2e6",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape4: {
        top: "50%",
        left: "0",
        height: "50%",
        width: "30%",
        backgroundColor: "#aed9e0",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape5: {
        top: "50%",
        left: "30%",
        height: "50%",
        width: "20%",
        backgroundColor: "#89b0ae",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape6: {
        top: "50%",
        left: "70%",
        height: "50%",
        width: "30%",
        backgroundColor: "#bee3db",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape7: {
        top: "75%",
        left: "85%",
        height: "25%",
        width: "15%",
        backgroundColor: "#5e6472",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
    },
    config_1: {
      shape1: {
        top: "0",
        left: "0",
        height: "50%",
        width: "20%",
        backgroundColor: "#ffa69e",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape2: {
        top: "0",
        left: "20%",
        height: "50%",
        width: "30%",
        backgroundColor: "#faf3dd",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape3: {
        top: "0",
        left: "50%",
        height: "100%",
        width: "50%",
        backgroundColor: "#b8f2e6",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape4: {
        top: "50%",
        left: "0",
        height: "50%",
        width: "30%",
        backgroundColor: "#aed9e0",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape5: {
        top: "50%",
        left: "30%",
        height: "50%",
        width: "20%",
        backgroundColor: "#89b0ae",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape6: {
        top: "50%",
        left: "70%",
        height: "50%",
        width: "30%",
        backgroundColor: "#bee3db",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape7: {
        top: "75%",
        left: "85%",
        height: "25%",
        width: "15%",
        backgroundColor: "#5e6472",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
    },
    config_5: {
      shape1: {
        top: "20%",
        left: "25%",
        height: "80%",
        width: "15%",
        backgroundColor: "#ffa69e",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape2: {
        top: "20%",
        left: "40%",
        height: "50%",
        width: "10%",
        backgroundColor: "#faf3dd",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape3: {
        top: "0",
        left: "50%",
        height: "100%",
        width: "25%",
        backgroundColor: "#b8f2e6",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape4: {
        top: "0",
        left: "0",
        height: "50%",
        width: "10%",
        backgroundColor: "#aed9e0",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape5: {
        top: "0",
        left: "10%",
        height: "70%",
        width: "15%",
        backgroundColor: "#89b0ae",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape6: {
        top: "10%",
        left: "75%",
        height: "80%",
        width: "15%",
        backgroundColor: "#bee3db",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
      shape7: {
        top: "40%",
        left: "90%",
        height: "60%",
        width: "10%",
        backgroundColor: "#5e6472",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "6rem",
      },
    },
    config_4: {
      shape1: {
        top: "20%",
        left: "25%",
        height: "80%",
        width: "15%",
        backgroundColor: "#ffa69e",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape2: {
        top: "20%",
        left: "40%",
        height: "50%",
        width: "10%",
        backgroundColor: "#faf3dd",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape3: {
        top: "0",
        left: "50%",
        height: "100%",
        width: "25%",
        backgroundColor: "#b8f2e6",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape4: {
        top: "0",
        left: "0",
        height: "50%",
        width: "10%",
        backgroundColor: "#aed9e0",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape5: {
        top: "0",
        left: "10%",
        height: "70%",
        width: "15%",
        backgroundColor: "#89b0ae",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape6: {
        top: "10%",
        left: "75%",
        height: "80%",
        width: "15%",
        backgroundColor: "#bee3db",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
      shape7: {
        top: "40%",
        left: "90%",
        height: "60%",
        width: "10%",
        backgroundColor: "#5e6472",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0rem",
      },
    },
    config_3: {
      shape1: {
        top: "0",
        left: "0",
        height: "50%",
        width: "20%",
        backgroundColor: "#ffa69e",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderBottomLeftRadius: "10rem",
      },
      shape2: {
        top: "0",
        left: "20%",
        height: "50%",
        width: "30%",
        backgroundColor: "#faf3dd",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "10rem",
      },
      shape3: {
        top: "0",
        left: "50%",
        height: "100%",
        width: "50%",
        backgroundColor: "#b8f2e6",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderTopRightRadius: "6rem",
      },
      shape4: {
        top: "50%",
        left: "0",
        height: "50%",
        width: "30%",
        backgroundColor: "#aed9e0",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderRadius: "0 10rem 10rem 0",
      },
      shape5: {
        top: "50%",
        left: "30%",
        height: "50%",
        width: "20%",
        backgroundColor: "#89b0ae",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderBottomLeftRadius: "10rem",
      },
      shape6: {
        top: "50%",
        left: "70%",
        height: "50%",
        width: "30%",
        backgroundColor: "#bee3db",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderTopLeftRadius: "10rem",
      },
      shape7: {
        top: "75%",
        left: "85%",
        height: "25%",
        width: "15%",
        backgroundColor: "#5e6472",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
        borderTopLeftRadius: "10rem",
      },
    },
  };

  const [config, setConfig] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setConfig((prevConfig) => {
        if (prevConfig === 5) {
          return 1;
        } else {
          return prevConfig + 1;
        }
      });
    }, 600);
    return () => clearInterval(interval);
  }, [config]);

  const selectedConfig = configurations[`config_${config}`];

  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div id="wrapper" className="aspect-[1.618] w-[30%] relative">
          {Object.entries(selectedConfig).map(([key, style]) => (
            <div key={key} style={style as React.CSSProperties}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loader;
