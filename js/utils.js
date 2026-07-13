export function calculateTotal(price, quantity) {
  if (typeof price !== "number" || Number.isNaN(price)) {
    throw new TypeError("Price must be a number");
  }

  if (typeof quantity !== "number" || Number.isNaN(quantity)) {
    throw new TypeError("Quantity must be a number");
  }

  if (price < 0) {
    throw new RangeError("Price cannot be negative");
  }

  if (quantity < 1) {
    throw new RangeError("Quantity must be at least 1");
  }

  return price * quantity;
}

export function formatRupiah(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError("Value must be a number");
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
