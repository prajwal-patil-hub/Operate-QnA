// ─── DB Query Data ────────────────────────────────────────────────────────────
// Edit this file to update the DB Query Manager section.
// After saving, just refresh the browser — changes appear automatically.
//
// COLUMNS:
//   id          → unique number (keep stable, don't reuse old ids)
//   header      → top-level group name (e.g. "User Management")
//   subheader   → label inside the group (e.g. "User Queries")
//   category    → query type (e.g. "SELECT", "INSERT", "UPDATE")
//   database    → engine label (e.g. "PostgreSQL", "MySQL", "SQLite")
//   name        → short query name
//   description → what the query does
//   sql         → the SQL text (use \n for line breaks)
// ─────────────────────────────────────────────────────────────────────────────

var DB_DATA = [

  /* ── User Management ─────────────────────────────────────────────────── */
  {
    id: 1,
    header: "User Management",
    subheader: "User Queries",
    category: "SELECT",
    database: "PostgreSQL",
    name: "Get all active users",
    description: "Returns all users with active status, ordered by most recently created.",
    sql: "SELECT  id, name, email, created_at\nFROM    users\nWHERE   status = 'active'\nORDER   BY created_at DESC;"
  },
  {
    id: 2,
    header: "User Management",
    subheader: "User Queries",
    category: "SELECT",
    database: "PostgreSQL",
    name: "Search users by email domain",
    description: "Finds all users whose email belongs to a specific domain (e.g. company accounts).",
    sql: "SELECT  id, name, email\nFROM    users\nWHERE   email ILIKE '%@example.com'\nORDER   BY name ASC;"
  },
  {
    id: 3,
    header: "User Management",
    subheader: "Authentication",
    category: "SELECT",
    database: "PostgreSQL",
    name: "Find users with expired sessions",
    description: "Returns users who have sessions older than 24 hours that have not been invalidated.",
    sql: "SELECT  u.id, u.email, s.created_at AS session_start\nFROM    users u\nJOIN    sessions s ON s.user_id = u.id\nWHERE   s.expires_at < NOW()\n  AND   s.invalidated = FALSE\nORDER   BY s.expires_at DESC;"
  },
  {
    id: 4,
    header: "User Management",
    subheader: "Authentication",
    category: "UPDATE",
    database: "PostgreSQL",
    name: "Lock user account after failed logins",
    description: "Sets account_locked = true for any user exceeding 5 consecutive failed login attempts.",
    sql: "UPDATE  users\nSET     account_locked = TRUE,\n        locked_at      = NOW()\nWHERE   failed_login_count >= 5\n  AND   account_locked = FALSE;"
  },

  /* ── Order Management ────────────────────────────────────────────────── */
  {
    id: 5,
    header: "Order Management",
    subheader: "Order Queries",
    category: "SELECT",
    database: "MySQL",
    name: "Get pending orders with customer info",
    description: "Joins orders with customers to show pending orders, newest first.",
    sql: "SELECT  o.id AS order_id,\n        c.name AS customer,\n        c.email,\n        o.total_amount,\n        o.created_at\nFROM    orders o\nINNER JOIN customers c ON c.id = o.customer_id\nWHERE   o.status = 'pending'\nORDER   BY o.created_at DESC\nLIMIT   100;"
  },
  {
    id: 6,
    header: "Order Management",
    subheader: "Order Queries",
    category: "SELECT",
    database: "MySQL",
    name: "Orders with line item count",
    description: "Returns each order along with how many distinct items were purchased.",
    sql: "SELECT  o.id,\n        o.status,\n        COUNT(li.id) AS item_count,\n        SUM(li.quantity) AS total_units\nFROM    orders o\nLEFT JOIN line_items li ON li.order_id = o.id\nGROUP   BY o.id, o.status\nORDER   BY o.id DESC;"
  },
  {
    id: 7,
    header: "Order Management",
    subheader: "Mutations",
    category: "UPDATE",
    database: "MySQL",
    name: "Mark orders as shipped",
    description: "Updates status and sets shipped_at timestamp for all fulfilled orders pending shipment.",
    sql: "UPDATE  orders\nSET     status     = 'shipped',\n        shipped_at = NOW()\nWHERE   status     = 'fulfilled'\n  AND   shipped_at IS NULL;"
  },

  /* ── Reporting & Analytics ───────────────────────────────────────────── */
  {
    id: 8,
    header: "Reporting & Analytics",
    subheader: "Revenue",
    category: "SELECT",
    database: "PostgreSQL",
    name: "Monthly revenue summary",
    description: "Aggregates paid order totals by calendar month for the current year.",
    sql: "SELECT  DATE_TRUNC('month', paid_at) AS month,\n        COUNT(*)                     AS orders,\n        SUM(total_amount)            AS revenue\nFROM    orders\nWHERE   status  = 'paid'\n  AND   paid_at >= DATE_TRUNC('year', NOW())\nGROUP   BY 1\nORDER   BY 1 DESC;"
  },
  {
    id: 9,
    header: "Reporting & Analytics",
    subheader: "Revenue",
    category: "SELECT",
    database: "PostgreSQL",
    name: "Top 10 customers by lifetime value",
    description: "Ranks customers by total amount spent across all completed orders.",
    sql: "SELECT  c.id,\n        c.name,\n        c.email,\n        SUM(o.total_amount) AS lifetime_value\nFROM    customers c\nJOIN    orders o ON o.customer_id = c.id\nWHERE   o.status = 'paid'\nGROUP   BY c.id, c.name, c.email\nORDER   BY lifetime_value DESC\nLIMIT   10;"
  },
  {
    id: 10,
    header: "Reporting & Analytics",
    subheader: "Inventory",
    category: "SELECT",
    database: "MySQL",
    name: "Low-stock products",
    description: "Lists all products where current stock quantity has fallen below the reorder threshold.",
    sql: "SELECT  p.id,\n        p.name,\n        p.sku,\n        p.stock_qty,\n        p.reorder_level\nFROM    products p\nWHERE   p.stock_qty < p.reorder_level\n  AND   p.active = 1\nORDER   BY p.stock_qty ASC;"
  }

];
