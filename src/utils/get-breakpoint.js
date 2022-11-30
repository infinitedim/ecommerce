const getBreakpoint = () => {
  const breakpoints = [
    {
      name: "xs",
      min: 0,
      max: 639,
    },
    {
      name: "sm",
      min: 640,
      max: 767,
    },
    {
      name: "md",
      min: 768,
      max: 991,
    },
    {
      name: "lg",
      min: 992,
      max: 1279,
    },
    {
      name: "xl",
      min: 1280,
      max: 1535,
    },
    {
      name: "2xl",
      min: 1536,
      max: Infinity,
    },
  ];

  const { innerWidth } = window;

  const breakpoint = breakpoints.find(
    (item) => innerWidth >= item.min && innerWidth <= item.max,
  );

  return breakpoint ? breakpoint.name : "xl";
};

export default getBreakpoint;
