# Uber Receipt Tracker

Uber Receipt Tracker is a Google Apps Script that automates the process of managing Uber receipts from your Gmail account. It parses the total value paid for each ride, downloads the PDF receipt, and adds the value to a Google Sheets spreadsheet. Additionally, it calculates the total amount paid for Uber rides.

## Background

During my time as a contractor, I needed to track Uber rides as work expenses. However, I was unaware of the option to categorize rides as business or personal in my Uber account. To effectively manage and claim these expenses, I developed this script to automatically track and record the total amount spent on Uber rides and to store the receipts for my records.

## Features

- Automatically processes Uber receipts from Gmail.
- Parses the total value paid for each ride.
- Downloads the PDF receipt from the email.
- Adds the value to a Google Sheets spreadsheet.
- Calculates the total amount paid for Uber rides.

## Installation

To use Uber Receipt Tracker, follow these steps:

1. Open the Google Apps Script editor.
2. Copy and paste the script code into a new script file.
3. Save the script and authorize it to access your Gmail and Google Sheets.
4. Set up a trigger to run the script periodically to process new Uber receipts.

## Usage

1. Ensure that your Uber receipts are in your Gmail folder named "Work".
2. Run the script manually or set up a trigger for automated processing.
3. Check the Google Sheets spreadsheet for the updated total amount paid for Uber rides.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, please submit a pull request or open an issue on GitHub.

