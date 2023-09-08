<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $clientName = $_POST["client_name"];
    $startDate = $_POST["start_date"];
    $endDate = $_POST["end_date"];
    $contractText = $_POST["contract_text"];

    // You can now do further processing or store this information in a database.
    // For this example, we'll just display the contract details.

    echo "Client Name: " . $clientName . "<br>";
    echo "Start Date: " . $startDate . "<br>";
    echo "End Date: " . $endDate . "<br>";
    echo "Contract Text: " . $contractText . "<br>";
} else {
    echo "Invalid request.";
}
