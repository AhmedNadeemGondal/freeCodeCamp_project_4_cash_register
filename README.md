# Cash Register

This project implements a cash register application that calculates the change due to a customer based on the cash given and the item's price. The app dynamically updates the available cash in the drawer and determines the transaction status.

## Features

- Accepts cash input and calculates change.
- Displays the change due in denominations.
- Shows transaction statuses:
  - `OPEN` - Change successfully provided with cash remaining in the drawer.
  - `CLOSED` - Exact change provided, leaving the drawer empty.
  - `INSUFFICIENT_FUNDS` - Unable to provide change due to lack of denominations.

## Live Demo

[View the project live here.](https://ahmednadeemgondal.github.io/freeCodeCamp_project_4_cash_register/)

## How It Works

1. The price of the item is fixed at **$19.50** for the demo.
2. The checks on the exercise checks all the stories/requirements.
3. The cash in the drawer (`cid`) is pre-set and locked for the exercise.
4. User enters the cash amount in the input field.
5. On clicking the **Purchase** button:
   - If cash is less than the price, an alert notifies insufficient payment.
   - If cash equals the price, no change is due.
   - If cash is greater than the price, change is calculated and displayed.
6. Change due is displayed in the appropriate denominations along with the transaction status.

## Technologies Used

- **HTML5** for structure.
- **CSS3** for styling.
- **Vanilla JavaScript** for functionality.

## Project Highlights

- Dynamic calculations for cash denominations using loops.
- Real-time update of cash-in-drawer status.
- User-friendly interface with responsive design.

## Usage

1. Enter a cash amount greater than or equal to **$19.50** in the input field.
2. Click the **Purchase** button to process the transaction.
3. View the calculated change and transaction status in the results section.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
