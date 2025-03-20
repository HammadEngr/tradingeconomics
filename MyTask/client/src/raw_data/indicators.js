const indicatorsData = [
  {
    Category: "1 Year MLF Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "14-Day Reverse Repo Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "15 Year Mortgage Rate",
    CategoryGroup: "Housing",
  },
  {
    Category: "30 Year Mortgage Rate",
    CategoryGroup: "Housing",
  },
  {
    Category: "ADP Employment Change",
    CategoryGroup: "Labour",
  },
  {
    Category: "ANZ Roy Morgan Consumer Confidence Index",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Apartment Permits",
    CategoryGroup: "Housing",
  },
  {
    Category: "API Crude Oil Stock Change",
    CategoryGroup: "Energy",
  },
  {
    Category: "API Cushing Number",
    CategoryGroup: "Energy",
  },
  {
    Category: "API Distillate Stocks",
    CategoryGroup: "Energy",
  },
  {
    Category: "API Gasoline Stocks",
    CategoryGroup: "Energy",
  },
  {
    Category: "Asylum Applications",
    CategoryGroup: "Government",
  },
  {
    Category: "Auto Exports",
    CategoryGroup: "Trade",
  },
  {
    Category: "Average Earnings Excluding Bonus",
    CategoryGroup: "Labour",
  },
  {
    Category: "Average Hourly Earnings",
    CategoryGroup: "Labour",
  },
  {
    Category: "Average Hourly Earnings YoY",
    CategoryGroup: "Labour",
  },
  {
    Category: "Average House Prices",
    CategoryGroup: "Housing",
  },
  {
    Category: "Average Mortgage Size",
    CategoryGroup: "Housing",
  },
  {
    Category: "Average Weekly Earnings",
    CategoryGroup: "Labour",
  },
  {
    Category: "Average Weekly Hours",
    CategoryGroup: "Labour",
  },
  {
    Category: "Baden Wuerttemberg CPI YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Balance of Trade",
    CategoryGroup: "Trade",
  },
  {
    Category: "Bank Bill Swap Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Bank Lending Rate",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Bankruptcies",
    CategoryGroup: "Business",
  },
  {
    Category: "Banks Balance Sheet",
    CategoryGroup: "Money",
  },
  {
    Category: "Bavaria CPI YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Brandenburg CPI YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "BRC Retail Sales Monitor YoY",
    CategoryGroup: "Business",
  },
  {
    Category: "Building Capital Expenditure",
    CategoryGroup: "Business",
  },
  {
    Category: "Building Permits",
    CategoryGroup: "Housing",
  },
  {
    Category: "Building Permits MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "Building Permits YoY",
    CategoryGroup: "Housing",
  },
  {
    Category: "Business Climate Indicator",
    CategoryGroup: "Business",
  },
  {
    Category: "Business Conditions Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Business Confidence",
    CategoryGroup: "Business",
  },
  {
    Category: "Business Inventories",
    CategoryGroup: "Business",
  },
  {
    Category: "Business Survey Index Large Manufacturing Firms",
    CategoryGroup: "Business",
  },
  {
    Category: "Capacity Utilization",
    CategoryGroup: "Business",
  },
  {
    Category: "Capital Flows",
    CategoryGroup: "Trade",
  },
  {
    Category: "Car Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Car Registrations",
    CategoryGroup: "Business",
  },
  {
    Category: "Case Shiller Home Price Index",
    CategoryGroup: "Housing",
  },
  {
    Category: "Case Shiller Home Price Index MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "Case Shiller Home Price Index YoY",
    CategoryGroup: "Housing",
  },
  {
    Category: "Cash Reserve Ratio",
    CategoryGroup: "Money",
  },
  {
    Category: "Cbi Distributive Trades",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Cement Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Central Bank Balance Sheet",
    CategoryGroup: "Money",
  },
  {
    Category: "Cereals Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "CFNAI Employment Index",
    CategoryGroup: "Business",
  },
  {
    Category: "CFNAI Personal Consumption and Housing Index",
    CategoryGroup: "Business",
  },
  {
    Category: "CFNAI Production Index",
    CategoryGroup: "Business",
  },
  {
    Category: "CFNAI Sales Orders and Inventories Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Chain Store Sales",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Challenger Job Cuts",
    CategoryGroup: "Labour",
  },
  {
    Category: "Changes in Inventories",
    CategoryGroup: "Business",
  },
  {
    Category: "Chicago Fed National Activity Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Chicago PMI",
    CategoryGroup: "Business",
  },
  {
    Category: "Claimant Count Change",
    CategoryGroup: "Labour",
  },
  {
    Category: "CO2 Emissions",
    CategoryGroup: "Climate",
  },
  {
    Category: "Coincident Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Commodity",
    CategoryGroup: "Markets",
  },
  {
    Category: "Commodity Prices YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Composite Leading Indicator",
    CategoryGroup: "Business",
  },
  {
    Category: "Composite PMI",
    CategoryGroup: "Business",
  },
  {
    Category: "Construction Orders",
    CategoryGroup: "Housing",
  },
  {
    Category: "Construction Output",
    CategoryGroup: "Housing",
  },
  {
    Category: "Construction PMI",
    CategoryGroup: "Housing",
  },
  {
    Category: "Construction Spending",
    CategoryGroup: "Housing",
  },
  {
    Category: "Consumer Confidence",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Consumer Confidence MoM",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Consumer Confidence Price Trends",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Consumer Credit",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Consumer Price Index CPI",
    CategoryGroup: "Prices",
  },
  {
    Category: "Consumer Price Index with fixed interest rate",
    CategoryGroup: "Prices",
  },
  {
    Category: "Consumer Spending",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Continuing Jobless Claims",
    CategoryGroup: "Labour",
  },
  {
    Category: "Copper Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Core Consumer Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core Inflation Rate",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core Inflation Rate MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core PCE Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core PCE Price Index Annual Change",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core PCE Price Index MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core PCE Prices QoQ",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core Producer Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core Producer Prices MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Core Producer Prices YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "CoreLogic Dwelling Prices MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "Corporate Profits",
    CategoryGroup: "Business",
  },
  {
    Category: "Corporate Tax Rate",
    CategoryGroup: "Taxes",
  },
  {
    Category: "Corruption Index",
    CategoryGroup: "Government",
  },
  {
    Category: "Corruption Rank",
    CategoryGroup: "Government",
  },
  {
    Category: "CPI Core Core",
    CategoryGroup: "Prices",
  },
  {
    Category: "CPI Housing Utilities",
    CategoryGroup: "Prices",
  },
  {
    Category: "CPI Median",
    CategoryGroup: "Prices",
  },
  {
    Category: "CPI seasonally adjusted",
    CategoryGroup: "Prices",
  },
  {
    Category: "CPI Transportation",
    CategoryGroup: "Prices",
  },
  {
    Category: "CPI Trimmed-Mean",
    CategoryGroup: "Prices",
  },
  {
    Category: "CPI with fixed interest rate MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "CPI with fixed interest rate YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Credit Card Accounts",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Credit Card Spending",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Credit Rating",
    CategoryGroup: "Government",
  },
  {
    Category: "Crude Oil Imports",
    CategoryGroup: "Energy",
  },
  {
    Category: "Crude Oil Production",
    CategoryGroup: "Trade",
  },
  {
    Category: "Crude Oil Rigs",
    CategoryGroup: "Energy",
  },
  {
    Category: "Crude Oil Stocks Change",
    CategoryGroup: "Energy",
  },
  {
    Category: "Currency",
    CategoryGroup: "Markets",
  },
  {
    Category: "Current Account",
    CategoryGroup: "Trade",
  },
  {
    Category: "Current Account Goods",
    CategoryGroup: "Trade",
  },
  {
    Category: "Current Account Services",
    CategoryGroup: "Trade",
  },
  {
    Category: "Current Account to GDP",
    CategoryGroup: "Trade",
  },
  {
    Category: "Cushing Crude Oil Stocks",
    CategoryGroup: "Energy",
  },
  {
    Category: "Dairy Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "Dallas Fed Manufacturing Employment Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Dallas Fed Manufacturing Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Dallas Fed Manufacturing New Orders Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Dallas Fed Manufacturing Prices Paid Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Dallas Fed Manufacturing Production Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Dallas Fed Manufacturing Shipments Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Dallas Fed Services Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Dallas Fed Services Revenues Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Debt Balance Auto Loans",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Debt Balance Credit Cards",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Debt Balance Mortgages",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Debt Balance Student Loans",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Debt Balance Total",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Deposit Growth",
    CategoryGroup: "Business",
  },
  {
    Category: "Deposit Interest Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Direct Investment Liabilities",
    CategoryGroup: "Trade",
  },
  {
    Category: "Disposable Personal Income",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Distillate Fuel Production",
    CategoryGroup: "Energy",
  },
  {
    Category: "Distillate Stocks",
    CategoryGroup: "Energy",
  },
  {
    Category: "Domestic Exports of Non Oil (nodx) (%yoy)",
    CategoryGroup: "Trade",
  },
  {
    Category: "Durable Goods Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "Durable Goods Orders Ex Defense",
    CategoryGroup: "Business",
  },
  {
    Category: "Durable Goods Orders Ex Transportation",
    CategoryGroup: "Business",
  },
  {
    Category: "Economic Activity Index",
    CategoryGroup: "GDP",
  },
  {
    Category: "Economic Optimism Index",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Economy Watchers Survey",
    CategoryGroup: "Business",
  },
  {
    Category: "Economy Watchers Survey Outlook",
    CategoryGroup: "Business",
  },
  {
    Category: "Effective Federal Funds Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Electric Car Exports",
    CategoryGroup: "Trade",
  },
  {
    Category: "Electric Car Registrations",
    CategoryGroup: "Business",
  },
  {
    Category: "Electricity Price",
    CategoryGroup: "Business",
  },
  {
    Category: "Electricity Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Employed Persons",
    CategoryGroup: "Labour",
  },
  {
    Category: "Employment Change",
    CategoryGroup: "Labour",
  },
  {
    Category: "Employment Cost Index",
    CategoryGroup: "Labour",
  },
  {
    Category: "Employment Cost Index Benefits",
    CategoryGroup: "Labour",
  },
  {
    Category: "Employment Cost Index Wages",
    CategoryGroup: "Labour",
  },
  {
    Category: "Employment Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Energy Inflation",
    CategoryGroup: "Prices",
  },
  {
    Category: "Energy Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Euro Short Term Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Existing Home Sales",
    CategoryGroup: "Housing",
  },
  {
    Category: "Existing Home Sales MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "Export Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Export Prices MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Export Prices YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Exports",
    CategoryGroup: "Trade",
  },
  {
    Category: "Exports of Non-oil Domestic Exports Of",
    CategoryGroup: "Trade",
  },
  {
    Category: "Exports YoY",
    CategoryGroup: "Trade",
  },
  {
    Category: "External Debt",
    CategoryGroup: "Trade",
  },
  {
    Category: "External Debt to GDP",
    CategoryGroup: "Trade",
  },
  {
    Category: "Factory Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "Factory Orders Ex Transportation",
    CategoryGroup: "Business",
  },
  {
    Category: "Fed Capital Account Surplus",
    CategoryGroup: "Money",
  },
  {
    Category: "Fiscal Expenditure",
    CategoryGroup: "Government",
  },
  {
    Category: "Fixed Asset Investment",
    CategoryGroup: "Money",
  },
  {
    Category: "Food Inflation",
    CategoryGroup: "Prices",
  },
  {
    Category: "Food Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "Foreign Bond Investment",
    CategoryGroup: "Money",
  },
  {
    Category: "Foreign Direct Investment",
    CategoryGroup: "Trade",
  },
  {
    Category: "Foreign Direct Investment YoY",
    CategoryGroup: "Trade",
  },
  {
    Category: "Foreign Exchange Reserves",
    CategoryGroup: "Money",
  },
  {
    Category: "Foreign Stock Investment",
    CategoryGroup: "Money",
  },
  {
    Category: "Freight Traffic",
    CategoryGroup: "Trade",
  },
  {
    Category: "Freight Traffic Civil Aviation",
    CategoryGroup: "Trade",
  },
  {
    Category: "Freight Traffic Highways",
    CategoryGroup: "Trade",
  },
  {
    Category: "Freight Traffic Railway",
    CategoryGroup: "Trade",
  },
  {
    Category: "Freight Traffic Waterways",
    CategoryGroup: "Trade",
  },
  {
    Category: "Full Time Employment",
    CategoryGroup: "Labour",
  },
  {
    Category: "Full Year GDP Growth",
    CategoryGroup: "GDP",
  },
  {
    Category: "Gasoline Prices",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Gasoline Production",
    CategoryGroup: "Energy",
  },
  {
    Category: "Gasoline Stocks Change",
    CategoryGroup: "Energy",
  },
  {
    Category: "GDP",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Aggregate Demand QoQ",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Aggregate Demand YoY",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Annual Growth Rate",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Chain Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "GDP Constant Prices",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Deflator",
    CategoryGroup: "Prices",
  },
  {
    Category: "GDP External Demand Contribution",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Agriculture",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Construction",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Manufacturing",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Mining",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Public Administration",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Services",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Transport",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP from Utilities",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Growth Annualized",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Growth Non Oil Sector",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Growth Oil Sector",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Growth Rate",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP per Capita",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP per Capita PPP",
    CategoryGroup: "GDP",
  },
  {
    Category: "GDP Sales QoQ",
    CategoryGroup: "GDP",
  },
  {
    Category: "Global Dairy Trade Price Index",
    CategoryGroup: "Trade",
  },
  {
    Category: "Gold Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Gold Reserves",
    CategoryGroup: "Trade",
  },
  {
    Category: "Goods Inflation",
    CategoryGroup: "Prices",
  },
  {
    Category: "Goods Trade Balance",
    CategoryGroup: "Trade",
  },
  {
    Category: "Goods Trade Balance Non-EU",
    CategoryGroup: "Trade",
  },
  {
    Category: "Government Bond 10Y",
    CategoryGroup: "Markets",
  },
  {
    Category: "Government Budget",
    CategoryGroup: "Government",
  },
  {
    Category: "Government Budget Value",
    CategoryGroup: "Government",
  },
  {
    Category: "Government Debt",
    CategoryGroup: "Government",
  },
  {
    Category: "Government Debt to GDP",
    CategoryGroup: "Government",
  },
  {
    Category: "Government Payrolls",
    CategoryGroup: "Labour",
  },
  {
    Category: "Government Revenues",
    CategoryGroup: "Government",
  },
  {
    Category: "Government Spending",
    CategoryGroup: "Government",
  },
  {
    Category: "Government Spending to GDP",
    CategoryGroup: "Government",
  },
  {
    Category: "Grain Stocks Corn",
    CategoryGroup: "Business",
  },
  {
    Category: "Grain Stocks Soy",
    CategoryGroup: "Business",
  },
  {
    Category: "Grain Stocks Wheat",
    CategoryGroup: "Business",
  },
  {
    Category: "Gross Debt to GDP",
    CategoryGroup: "Government",
  },
  {
    Category: "Gross Fixed Capital Formation",
    CategoryGroup: "GDP",
  },
  {
    Category: "Gross National Product",
    CategoryGroup: "GDP",
  },
  {
    Category: "Harmonised Consumer Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Harmonised Inflation Rate MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Harmonised Inflation Rate YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Harmonised Unemployment Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Heating Oil Stocks",
    CategoryGroup: "Energy",
  },
  {
    Category: "Hesse CPI YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Hiring Plans Announcements",
    CategoryGroup: "Labour",
  },
  {
    Category: "Home Loans",
    CategoryGroup: "Housing",
  },
  {
    Category: "Home Ownership Rate",
    CategoryGroup: "Housing",
  },
  {
    Category: "Home Sales",
    CategoryGroup: "Housing",
  },
  {
    Category: "Hospital Beds",
    CategoryGroup: "Health",
  },
  {
    Category: "Hospitals",
    CategoryGroup: "Health",
  },
  {
    Category: "House Price Index MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "House Price Index YoY",
    CategoryGroup: "Housing",
  },
  {
    Category: "Household Spending",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Household Spending MoM",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Households Debt to GDP",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Households Debt to Income",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Houses Permits",
    CategoryGroup: "Housing",
  },
  {
    Category: "Housing Credit",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Housing Index",
    CategoryGroup: "Housing",
  },
  {
    Category: "Housing Starts",
    CategoryGroup: "Housing",
  },
  {
    Category: "Housing Starts MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "Housing Starts Multi Family",
    CategoryGroup: "Housing",
  },
  {
    Category: "Housing Starts Single Family",
    CategoryGroup: "Housing",
  },
  {
    Category: "Housing Starts YoY",
    CategoryGroup: "Housing",
  },
  {
    Category: "ICU Beds",
    CategoryGroup: "Health",
  },
  {
    Category: "Ifo Current Conditions",
    CategoryGroup: "Business",
  },
  {
    Category: "Ifo Expectations",
    CategoryGroup: "Business",
  },
  {
    Category: "IGP-M Inflation MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Import Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Import Prices MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Import Prices YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Imports",
    CategoryGroup: "Trade",
  },
  {
    Category: "Imports YoY",
    CategoryGroup: "Trade",
  },
  {
    Category: "Inactivity Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Industrial Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Industrial Production Mom",
    CategoryGroup: "Business",
  },
  {
    Category: "Industrial Sentiment",
    CategoryGroup: "Business",
  },
  {
    Category: "Industry Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Industry Index Business Services",
    CategoryGroup: "Business",
  },
  {
    Category: "Industry Index Construction",
    CategoryGroup: "Business",
  },
  {
    Category: "Industry Index Manufacturing",
    CategoryGroup: "Business",
  },
  {
    Category: "Inflation Expectations",
    CategoryGroup: "Prices",
  },
  {
    Category: "Inflation Rate",
    CategoryGroup: "Prices",
  },
  {
    Category: "Inflation Rate MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Initial Jobless Claims",
    CategoryGroup: "Labour",
  },
  {
    Category: "Input Producer Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Interbank Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Interest Payments on Government Debt",
    CategoryGroup: "Government",
  },
  {
    Category: "Interest Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Interest rate on new mortgages",
    CategoryGroup: "Money",
  },
  {
    Category: "Interest Rate on Outstanding Mortgages",
    CategoryGroup: "Money",
  },
  {
    Category: "Investment in Foreign Securities",
    CategoryGroup: "Money",
  },
  {
    Category: "Investment Lending for Homes",
    CategoryGroup: "Housing",
  },
  {
    Category: "IPC-Fipe Inflation MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "ISM Manufacturing Backlog of Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Manufacturing Employment",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Manufacturing Inventories",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Manufacturing New Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Manufacturing Prices",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Manufacturing Production",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Manufacturing Supplier Deliveries",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Non Manufacturing Business Activity",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Non Manufacturing Employment",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Non Manufacturing New Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "ISM Non Manufacturing Prices",
    CategoryGroup: "Business",
  },
  {
    Category: "Job Advertisements",
    CategoryGroup: "Labour",
  },
  {
    Category: "Job Layoffs and Discharges",
    CategoryGroup: "Labour",
  },
  {
    Category: "Job Offers",
    CategoryGroup: "Labour",
  },
  {
    Category: "Job Quits",
    CategoryGroup: "Labour",
  },
  {
    Category: "Job Quits Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Job Vacancies",
    CategoryGroup: "Labour",
  },
  {
    Category: "Job Vacancy Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Jobless Claims 4-week Average",
    CategoryGroup: "Labour",
  },
  {
    Category: "Jobs To Applications Ratio",
    CategoryGroup: "Labour",
  },
  {
    Category: "Kansas Fed Composite Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Kansas Fed Employment Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Kansas Fed Manufacturing Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Kansas Fed New Orders Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Kansas Fed Prices Paid Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Kansas Fed Shipments Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Labor Force Participation Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Labour Costs",
    CategoryGroup: "Labour",
  },
  {
    Category: "Leading Economic Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Lending Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Liquidity Injections Via MLF",
    CategoryGroup: "Money",
  },
  {
    Category: "Liquidity Injections Via Reverse Repo",
    CategoryGroup: "Money",
  },
  {
    Category: "LMI Inventory Costs",
    CategoryGroup: "Business",
  },
  {
    Category: "LMI Logistics Managers Index",
    CategoryGroup: "Business",
  },
  {
    Category: "LMI Logistics Managers Index Future",
    CategoryGroup: "Business",
  },
  {
    Category: "LMI Transportation Prices",
    CategoryGroup: "Business",
  },
  {
    Category: "LMI Warehouse Prices",
    CategoryGroup: "Business",
  },
  {
    Category: "Loan Growth",
    CategoryGroup: "Money",
  },
  {
    Category: "Loan Prime Rate 5Y",
    CategoryGroup: "Money",
  },
  {
    Category: "Loans To Banks",
    CategoryGroup: "Money",
  },
  {
    Category: "Loans to Private Sector",
    CategoryGroup: "Money",
  },
  {
    Category: "Long Term Unemployment Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Longer-Term Refinancing Operations",
    CategoryGroup: "Money",
  },
  {
    Category: "Machine Tool Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "Machinery Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "Manufacturing Payrolls",
    CategoryGroup: "Labour",
  },
  {
    Category: "Manufacturing PMI",
    CategoryGroup: "Business",
  },
  {
    Category: "Manufacturing Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Manufacturing Production MoM",
    CategoryGroup: "Business",
  },
  {
    Category: "Manufacturing Sales",
    CategoryGroup: "Business",
  },
  {
    Category: "MBA Mortgage Market Index",
    CategoryGroup: "Housing",
  },
  {
    Category: "MBA Mortgage Refinance Index",
    CategoryGroup: "Housing",
  },
  {
    Category: "MBA Purchase Index",
    CategoryGroup: "Housing",
  },
  {
    Category: "Meat Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "Medical Doctors",
    CategoryGroup: "Health",
  },
  {
    Category: "MI Inflation Gauge MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Michigan 5 Year Inflation Expectations",
    CategoryGroup: "Prices",
  },
  {
    Category: "Michigan Consumer Expectations",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Michigan Current Economic Conditions",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Michigan Inflation Expectations",
    CategoryGroup: "Prices",
  },
  {
    Category: "Mid-month Core Inflation Rate MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Mid-month Core Inflation Rate YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Mid-month Inflation Rate MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Mid-month Inflation Rate YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Military Expenditure",
    CategoryGroup: "Government",
  },
  {
    Category: "Minimum Wages",
    CategoryGroup: "Labour",
  },
  {
    Category: "Mining Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Money Supply M0",
    CategoryGroup: "Money",
  },
  {
    Category: "Money Supply M1",
    CategoryGroup: "Money",
  },
  {
    Category: "Money Supply M2",
    CategoryGroup: "Money",
  },
  {
    Category: "Money Supply M3",
    CategoryGroup: "Money",
  },
  {
    Category: "Money Supply M4",
    CategoryGroup: "Money",
  },
  {
    Category: "Monthly CPI Indicator",
    CategoryGroup: "Prices",
  },
  {
    Category: "Monthly GDP MoM",
    CategoryGroup: "GDP",
  },
  {
    Category: "Monthly GDP YoY",
    CategoryGroup: "GDP",
  },
  {
    Category: "Mortgage Applications",
    CategoryGroup: "Housing",
  },
  {
    Category: "Mortgage Approvals",
    CategoryGroup: "Housing",
  },
  {
    Category: "Mortgage Originations",
    CategoryGroup: "Housing",
  },
  {
    Category: "Mortgage Rate",
    CategoryGroup: "Housing",
  },
  {
    Category: "Motorbike Sales",
    CategoryGroup: "Business",
  },
  {
    Category: "Nahb Housing Market Index",
    CategoryGroup: "Housing",
  },
  {
    Category: "National Home Price Index",
    CategoryGroup: "Housing",
  },
  {
    Category: "National Wealth Fund Assets",
    CategoryGroup: "Government",
  },
  {
    Category: "National Wealth Fund Assets to GDP",
    CategoryGroup: "Government",
  },
  {
    Category: "National Wealth Fund Liquid Assets",
    CategoryGroup: "Government",
  },
  {
    Category: "Nationwide Housing Prices",
    CategoryGroup: "Housing",
  },
  {
    Category: "Nationwide Housing Prices MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "Nationwide Housing Prices YoY",
    CategoryGroup: "Housing",
  },
  {
    Category: "Natural Gas Imports",
    CategoryGroup: "Trade",
  },
  {
    Category: "Natural Gas Stocks Capacity",
    CategoryGroup: "Energy",
  },
  {
    Category: "Natural Gas Stocks Change",
    CategoryGroup: "Energy",
  },
  {
    Category: "Natural Gas Stocks Injection",
    CategoryGroup: "Energy",
  },
  {
    Category: "Natural Gas Stocks Inventory",
    CategoryGroup: "Energy",
  },
  {
    Category: "Natural Gas Stocks Withdrawal",
    CategoryGroup: "Energy",
  },
  {
    Category: "NBS General PMI",
    CategoryGroup: "Business",
  },
  {
    Category: "Negotiated Wage Growth",
    CategoryGroup: "Labour",
  },
  {
    Category: "Net Lending to Individuals MoM",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Net Long-term TIC Flows",
    CategoryGroup: "Trade",
  },
  {
    Category: "New Home Sales",
    CategoryGroup: "Housing",
  },
  {
    Category: "New Home Sales MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "New Home Sales YoY",
    CategoryGroup: "Housing",
  },
  {
    Category: "New Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "New Passenger Car Registrations YoY",
    CategoryGroup: "Business",
  },
  {
    Category: "NFIB Business Optimism Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Non Defense Capital Goods Orders Ex Aircraft",
    CategoryGroup: "Business",
  },
  {
    Category: "Non Farm Payrolls",
    CategoryGroup: "Labour",
  },
  {
    Category: "Non Manufacturing PMI",
    CategoryGroup: "Business",
  },
  {
    Category: "Non Oil Exports",
    CategoryGroup: "Trade",
  },
  {
    Category: "Nonfarm Payrolls Private",
    CategoryGroup: "Labour",
  },
  {
    Category: "Nonfarm Productivity QoQ",
    CategoryGroup: "Labour",
  },
  {
    Category: "North Rhine Westphalia CPI YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Nurses",
    CategoryGroup: "Health",
  },
  {
    Category: "NY Empire State Employment Index",
    CategoryGroup: "Business",
  },
  {
    Category: "NY Empire State Manufacturing Index",
    CategoryGroup: "Business",
  },
  {
    Category: "NY Empire State New Orders Index",
    CategoryGroup: "Business",
  },
  {
    Category: "NY Empire State Prices Paid Index",
    CategoryGroup: "Business",
  },
  {
    Category: "NY Empire State Shipments Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Oil Exports",
    CategoryGroup: "Trade",
  },
  {
    Category: "Oils Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "Overnight Interbank Average Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Overtime Pay YoY",
    CategoryGroup: "Labour",
  },
  {
    Category: "Part Time Employment",
    CategoryGroup: "Labour",
  },
  {
    Category: "PCE Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "PCE Price Index Annual Change",
    CategoryGroup: "Prices",
  },
  {
    Category: "PCE Price Index Monthly Change",
    CategoryGroup: "Prices",
  },
  {
    Category: "PCE Prices QoQ",
    CategoryGroup: "Prices",
  },
  {
    Category: "Pending Home Sales",
    CategoryGroup: "Housing",
  },
  {
    Category: "Pending Home Sales MoM",
    CategoryGroup: "Housing",
  },
  {
    Category: "Personal Income",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Personal Income Tax Rate",
    CategoryGroup: "Taxes",
  },
  {
    Category: "Personal Savings",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Personal Spending",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Philadelphia Fed Manufacturing Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Philly Fed Business Conditions",
    CategoryGroup: "Business",
  },
  {
    Category: "Philly Fed CAPEX Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Philly Fed Employment",
    CategoryGroup: "Business",
  },
  {
    Category: "Philly Fed New Orders",
    CategoryGroup: "Business",
  },
  {
    Category: "Philly Fed Prices Paid",
    CategoryGroup: "Business",
  },
  {
    Category: "Plant Machinery Capital Expenditure",
    CategoryGroup: "Business",
  },
  {
    Category: "Population",
    CategoryGroup: "Labour",
  },
  {
    Category: "PPI Ex Food Energy and Trade Services",
    CategoryGroup: "Prices",
  },
  {
    Category: "PPI Ex Food Energy and Trade Services MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "PPI Ex Food Energy and Trade Services YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "PPI Input",
    CategoryGroup: "Prices",
  },
  {
    Category: "PPI Input YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Precipitation",
    CategoryGroup: "Climate",
  },
  {
    Category: "Price to Rent Ratio",
    CategoryGroup: "Housing",
  },
  {
    Category: "Private Debt to GDP",
    CategoryGroup: "Money",
  },
  {
    Category: "Private House Approvals",
    CategoryGroup: "Housing",
  },
  {
    Category: "Private Investment",
    CategoryGroup: "Business",
  },
  {
    Category: "Private Rental Prices",
    CategoryGroup: "Housing",
  },
  {
    Category: "Private Sector Credit",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Producer Price Inflation MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Producer Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Producer Prices Change",
    CategoryGroup: "Prices",
  },
  {
    Category: "Productivity",
    CategoryGroup: "Labour",
  },
  {
    Category: "Property Investment",
    CategoryGroup: "Housing",
  },
  {
    Category: "Proxy Funds Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Public Sector Net Borrowing",
    CategoryGroup: "Government",
  },
  {
    Category: "Public Sector Net Debt to GDP",
    CategoryGroup: "Government",
  },
  {
    Category: "Purchases of Government Bonds",
    CategoryGroup: "Money",
  },
  {
    Category: "Real Consumer Spending",
    CategoryGroup: "GDP",
  },
  {
    Category: "Real Earnings Excluding Bonuses",
    CategoryGroup: "Labour",
  },
  {
    Category: "Real Earnings Including Bonuses",
    CategoryGroup: "Labour",
  },
  {
    Category: "Redbook Index",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Refinancing Operations",
    CategoryGroup: "Money",
  },
  {
    Category: "Refinery Crude Runs",
    CategoryGroup: "Energy",
  },
  {
    Category: "Registered Jobless Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Remittances",
    CategoryGroup: "Trade",
  },
  {
    Category: "Rent Inflation",
    CategoryGroup: "Prices",
  },
  {
    Category: "Repo Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Residential Property Prices",
    CategoryGroup: "Housing",
  },
  {
    Category: "Retail Inventories Ex Autos",
    CategoryGroup: "Business",
  },
  {
    Category: "Retail Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "Retail Sales Control Group",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Retail Sales Ex Autos",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Retail Sales Ex Fuel",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Retail Sales Ex Gas and Autos MoM",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Retail Sales MoM",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Retail Sales YoY",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Retirement Age Men",
    CategoryGroup: "Labour",
  },
  {
    Category: "Retirement Age Women",
    CategoryGroup: "Labour",
  },
  {
    Category: "Reuters Tankan Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Reverse Repo Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Richmond Fed Manufacturing Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Richmond Fed Manufacturing Shipments",
    CategoryGroup: "Business",
  },
  {
    Category: "Richmond Fed Services Index",
    CategoryGroup: "Business",
  },
  {
    Category: "RICS House Price Balance",
    CategoryGroup: "Housing",
  },
  {
    Category: "Sales Tax Rate",
    CategoryGroup: "Taxes",
  },
  {
    Category: "Saxony CPI YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Secured Overnight Financing Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Selling Price Expectations",
    CategoryGroup: "Prices",
  },
  {
    Category: "Services Inflation",
    CategoryGroup: "Prices",
  },
  {
    Category: "Services PMI",
    CategoryGroup: "Business",
  },
  {
    Category: "Services Sentiment",
    CategoryGroup: "Business",
  },
  {
    Category: "Single Family Home Prices",
    CategoryGroup: "Housing",
  },
  {
    Category: "Small Business Sentiment",
    CategoryGroup: "Business",
  },
  {
    Category: "Social Security Rate",
    CategoryGroup: "Taxes",
  },
  {
    Category: "Social Security Rate For Companies",
    CategoryGroup: "Taxes",
  },
  {
    Category: "Social Security Rate For Employees",
    CategoryGroup: "Taxes",
  },
  {
    Category: "Steel Production",
    CategoryGroup: "Business",
  },
  {
    Category: "Sterling Overnight Index Average Rate",
    CategoryGroup: "Money",
  },
  {
    Category: "Stock Market",
    CategoryGroup: "Markets",
  },
  {
    Category: "Strategic Petroleum Reserve Crude Oil Stocks",
    CategoryGroup: "Energy",
  },
  {
    Category: "Sugar Price Index",
    CategoryGroup: "Prices",
  },
  {
    Category: "Supply Chain Pressure Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Tankan Large All Industry Capex",
    CategoryGroup: "Business",
  },
  {
    Category: "Tankan Large Manufacturing Outlook",
    CategoryGroup: "Business",
  },
  {
    Category: "Tankan Non-Manufacturing Outlook",
    CategoryGroup: "Business",
  },
  {
    Category: "Tax Revenue",
    CategoryGroup: "Government",
  },
  {
    Category: "Temperature",
    CategoryGroup: "Climate",
  },
  {
    Category: "Terms of Trade",
    CategoryGroup: "Trade",
  },
  {
    Category: "Terrorism Index",
    CategoryGroup: "Trade",
  },
  {
    Category: "Tertiary Industry Index",
    CategoryGroup: "Business",
  },
  {
    Category: "Tokyo Core CPI",
    CategoryGroup: "Prices",
  },
  {
    Category: "Tokyo CPI",
    CategoryGroup: "Prices",
  },
  {
    Category: "Tokyo CPI Ex Food and Energy",
    CategoryGroup: "Prices",
  },
  {
    Category: "Total Housing Inventory",
    CategoryGroup: "Housing",
  },
  {
    Category: "Total Rigs",
    CategoryGroup: "Energy",
  },
  {
    Category: "Total Vehicle Sales",
    CategoryGroup: "Business",
  },
  {
    Category: "Tourism Revenues",
    CategoryGroup: "Trade",
  },
  {
    Category: "Tourist Arrivals",
    CategoryGroup: "Trade",
  },
  {
    Category: "Treasury Cash Balance",
    CategoryGroup: "Government",
  },
  {
    Category: "Trimmed Mean CPI QoQ",
    CategoryGroup: "Prices",
  },
  {
    Category: "U6 Unemployment Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Unemployed Persons",
    CategoryGroup: "Labour",
  },
  {
    Category: "Unemployment Change",
    CategoryGroup: "Labour",
  },
  {
    Category: "Unemployment Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "Unit Labour Costs QoQ",
    CategoryGroup: "Labour",
  },
  {
    Category: "Used Car Prices MoM",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Used Car Prices YoY",
    CategoryGroup: "Consumer",
  },
  {
    Category: "Wage Growth",
    CategoryGroup: "Labour",
  },
  {
    Category: "Wages",
    CategoryGroup: "Labour",
  },
  {
    Category: "Wages in Manufacturing",
    CategoryGroup: "Labour",
  },
  {
    Category: "Weapons Sales",
    CategoryGroup: "Trade",
  },
  {
    Category: "Weekly Crude Oil Production",
    CategoryGroup: "Trade",
  },
  {
    Category: "Weekly Economic Index",
    CategoryGroup: "GDP",
  },
  {
    Category: "Weighted Median CPI QoQ",
    CategoryGroup: "Prices",
  },
  {
    Category: "Weighted Median CPI YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Wholesale Inventories",
    CategoryGroup: "Business",
  },
  {
    Category: "Wholesale Prices",
    CategoryGroup: "Prices",
  },
  {
    Category: "Wholesale Prices MoM",
    CategoryGroup: "Prices",
  },
  {
    Category: "Wholesale Prices YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Wholesale Sales",
    CategoryGroup: "Business",
  },
  {
    Category: "Withholding Tax Rate",
    CategoryGroup: "Taxes",
  },
  {
    Category: "WPI Food Index YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "WPI Fuel YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "WPI Manufacturing YoY",
    CategoryGroup: "Prices",
  },
  {
    Category: "Youth Unemployment Rate",
    CategoryGroup: "Labour",
  },
  {
    Category: "ZEW Current Conditions",
    CategoryGroup: "Business",
  },
  {
    Category: "ZEW Economic Sentiment Index",
    CategoryGroup: "Business",
  },
];
export default indicatorsData;
