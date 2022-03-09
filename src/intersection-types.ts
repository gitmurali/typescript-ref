type SpecialDate = Date & { getReason(): string }; // & means extends

const newYearsEve: SpecialDate = {
  ...new Date(),
  getReason: () => "Last day of the year"
};

newYearsEve.getReason();
