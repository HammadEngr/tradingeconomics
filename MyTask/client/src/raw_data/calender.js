const calenderData = [
  {
    CalendarId: "375461",
    Date: "2025-03-19T21:45:00",
    Country: "New Zealand",
    Category: "GDP Annual Growth Rate",
    Event: "GDP Growth Rate YoY",
    Reference: "Q4",
    ReferenceDate: "2024-12-31T00:00:00",
    Source: "Statistics New Zealand",
    SourceURL: "https://www.stats.govt.nz/",
    Actual: "",
    Previous: "-1.5%",
    Forecast: "-1.4%",
    TEForecast: "-1.1%",
    URL: "/new-zealand/gdp-growth-annual",
    DateSpan: "0",
    Importance: 2,
    LastUpdate: "2025-03-14T09:45:23.197",
    Revised: "",
    Currency: "",
    Unit: "%",
    Ticker: "NZNTGDPY",
    Symbol: "NZNTGDPY",
  },
  {
    CalendarId: "375462",
    Date: "2025-03-19T21:45:00",
    Country: "New Zealand",
    Category: "GDP Growth Rate",
    Event: "GDP Growth Rate QoQ",
    Reference: "Q4",
    ReferenceDate: "2024-12-31T00:00:00",
    Source: "Statistics New Zealand",
    SourceURL: "http://www.stats.govt.nz/",
    Actual: "",
    Previous: "-1%",
    Forecast: "0.4%",
    TEForecast: "0.2%",
    URL: "/new-zealand/gdp-growth",
    DateSpan: "0",
    Importance: 2,
    LastUpdate: "2025-03-14T09:39:52.657",
    Revised: "",
    Currency: "",
    Unit: "%",
    Ticker: "NZNTGDPC",
    Symbol: "NZNTGDPC",
  },
  {
    CalendarId: "390941",
    Date: "2025-03-20T08:30:00",
    Country: "Sweden",
    Category: "Interest Rate",
    Event: "Riksbank Rate Decision",
    Reference: "",
    ReferenceDate: "2025-03-20T00:00:00",
    Source: "Sveriges Riksbank",
    SourceURL: "https://www.riksbank.se/",
    Actual: "",
    Previous: "2.25%",
    Forecast: "2.25%",
    TEForecast: "2.25%",
    URL: "/sweden/interest-rate",
    DateSpan: "0",
    Importance: 2,
    LastUpdate: "2025-03-17T12:47:07.637",
    Revised: "",
    Currency: "",
    Unit: "%",
    Ticker: "SWRRATEI",
    Symbol: "SWRRATEI",
  },
  {
    CalendarId: "375384",
    Date: "2025-03-20T12:00:00",
    Country: "Mexico",
    Category: "Consumer Spending",
    Event: "Private Spending YoY",
    Reference: "Q4",
    ReferenceDate: "2024-12-31T00:00:00",
    Source: "Instituto Nacional de Estadística y Geografía (INEGI)",
    SourceURL: "https://www.inegi.org.mx/",
    Actual: "",
    Previous: "2.9%",
    Forecast: "",
    TEForecast: "0.7%",
    URL: "/mexico/consumer-spending",
    DateSpan: "0",
    Importance: 1,
    LastUpdate: "2025-03-12T15:47:25.513",
    Revised: "",
    Currency: "",
    Unit: "%",
    Ticker: "MEXICOCONSPE",
    Symbol: "MEXICOCONSPE",
  },
  {
    CalendarId: "375385",
    Date: "2025-03-20T12:00:00",
    Country: "Mexico",
    Category: "Consumer Spending",
    Event: "Private Spending QoQ",
    Reference: "Q4",
    ReferenceDate: "2024-12-31T00:00:00",
    Source: "Instituto Nacional de Estadística y Geografía (INEGI)",
    SourceURL: "https://www.inegi.org.mx/",
    Actual: "",
    Previous: "1.1%",
    Forecast: "",
    TEForecast: "-0.8%",
    URL: "/mexico/consumer-spending",
    DateSpan: "0",
    Importance: 1,
    LastUpdate: "2025-03-12T15:47:32.43",
    Revised: "",
    Currency: "",
    Unit: "%",
    Ticker: "MEXICOCONSPE",
    Symbol: "MEXICOCONSPE",
  },
  {
    CalendarId: "375386",
    Date: "2025-03-20T12:00:00",
    Country: "Mexico",
    Category: "GDP Aggregate Demand YoY",
    Event: "Aggregate Demand YoY",
    Reference: "Q4",
    ReferenceDate: "2024-12-31T00:00:00",
    Source: "Instituto Nacional de Estadística y Geografía (INEGI)",
    SourceURL: "https://www.inegi.org.mx",
    Actual: "",
    Previous: "2.3%",
    Forecast: "1.9%",
    TEForecast: "1.2%",
    URL: "/mexico/gdp-aggregate-demand-yoy",
    DateSpan: "0",
    Importance: 1,
    LastUpdate: "2025-03-19T12:13:26.567",
    Revised: "",
    Currency: "",
    Unit: "%",
    Ticker: "MEXGADY",
    Symbol: "MEXGADY",
  },
  {
    CalendarId: "375387",
    Date: "2025-03-20T12:00:00",
    Country: "Mexico",
    Category: "GDP Aggregate Demand QoQ",
    Event: "Aggregate Demand QoQ",
    Reference: "Q4",
    ReferenceDate: "2024-12-31T00:00:00",
    Source: "Instituto Nacional de Estadística y Geografía (INEGI)",
    SourceURL: "https://www.inegi.org.mx",
    Actual: "",
    Previous: "1.2%",
    Forecast: "",
    TEForecast: "-0.2%",
    URL: "/mexico/gdp-aggregate-demand-qoq",
    DateSpan: "0",
    Importance: 1,
    LastUpdate: "2025-03-19T12:01:18.72",
    Revised: "",
    Currency: "",
    Unit: "%",
    Ticker: "MEXGADQ",
    Symbol: "MEXGADQ",
  },
  {
    CalendarId: "375598",
    Date: "2025-03-20T21:45:00",
    Country: "New Zealand",
    Category: "Imports",
    Event: "Imports",
    Reference: "Feb",
    ReferenceDate: "2025-02-28T00:00:00",
    Source: "Statistics New Zealand",
    SourceURL: "https://www.stats.govt.nz/",
    Actual: "",
    Previous: "NZ$6.68B",
    Forecast: "",
    TEForecast: "NZ$6.5B",
    URL: "/new-zealand/imports",
    DateSpan: "0",
    Importance: 1,
    LastUpdate: "2025-02-20T22:54:15.35",
    Revised: "",
    Currency: "NZ$",
    Unit: "B",
    Ticker: "NZMTIMP",
    Symbol: "NZMTIMP",
  },
  {
    CalendarId: "375599",
    Date: "2025-03-20T21:45:00",
    Country: "New Zealand",
    Category: "Exports",
    Event: "Exports",
    Reference: "Feb",
    ReferenceDate: "2025-02-28T00:00:00",
    Source: "Statistics New Zealand",
    SourceURL: "http://www.stats.govt.nz/",
    Actual: "",
    Previous: "NZ$6.19B",
    Forecast: "",
    TEForecast: "NZ$6.3B",
    URL: "/new-zealand/exports",
    DateSpan: "0",
    Importance: 1,
    LastUpdate: "2025-02-20T22:53:19.1",
    Revised: "",
    Currency: "NZ$",
    Unit: "B",
    Ticker: "NZMTEXP",
    Symbol: "NZMTEXP",
  },
  {
    CalendarId: "375600",
    Date: "2025-03-20T21:45:00",
    Country: "New Zealand",
    Category: "Balance of Trade",
    Event: "Balance of Trade",
    Reference: "Feb",
    ReferenceDate: "2025-02-28T00:00:00",
    Source: "Statistics New Zealand",
    SourceURL: "https://www.stats.govt.nz/",
    Actual: "",
    Previous: "NZ$-0.486B",
    Forecast: "NZ$-0.235B",
    TEForecast: "NZ$-0.2B",
    URL: "/new-zealand/balance-of-trade",
    DateSpan: "0",
    Importance: 2,
    LastUpdate: "2025-03-14T15:04:07.607",
    Revised: "",
    Currency: "NZ$",
    Unit: "B",
    Ticker: "NZMTBAL",
    Symbol: "NZMTBAL",
  },
];
export default calenderData;
