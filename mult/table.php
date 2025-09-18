<html>
    <head>
        <link rel="stylesheet" href="table.css">
    </head>
    <body class="tr-off">
        <div id="card" class="tr-off">
            <div id="card-content">
                <div id="table-container">
                    <?php
                        // get ?size= query string parameter
                        $size = isset($_GET['size']) ? (int)$_GET['size'] : -1;

                        if ($size == -1) {
                            echo "<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem;'>";
                            echo "<p>You're not supposed to be here &mdash; a size somehow was not provided.</p>";
                            echo "<a href='.'>Go to multiplication table page</a>";
                            echo "</div>";
                            exit;
                        }

                        // print multiplication table
                        // top-left cell is empty
                        echo "<table>";

                        // header row
                        echo "<tr class='tr-off'><th class='tr-off'></th>";
                        for ($col = 1; $col <= $size; $col++) {
                            echo "<th class='tr-off'>{$col}</th>";
                        }
                        echo "</tr>";

                        // data rows
                        for ($row = 1; $row <= $size; $row++) {
                            echo "<tr class='tr-off'><th class='tr-off'>{$row}</th>";
                            for ($col = 1; $col <= $size; $col++) {
                                echo "<td class='tr-off'>" . ($row * $col) . "</td>";
                            }
                            echo "</tr>";
                        }

                        echo "</table>";
                    ?>
                </div>
            </div>
        </div>
        <script src="table.js"></script>
    </body>
</html>
