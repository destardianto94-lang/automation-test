import test from "node:test";
import assert from "node:assert/strict";

//import { calculateTotal, formatRupiah } from "../js/utils.js";

test("calculateTotal menghitung harga dikali jumlah", () => {
  //const result = calculateTotal(10000, 2);

  assert.equal(result, 20000);
});

test("calculateTotal mendukung jumlah lebih dari satu", () => {
  const result = calculateTotal(15000, 3);

  assert.equal(result, 45000);
});

test("calculateTotal menolak harga negatif", () => {
  assert.throws(() => calculateTotal(-10000, 2), {
    name: "RangeError",
    message: "Price cannot be negative",
  });
});

test("calculateTotal menolak quantity kurang dari satu", () => {
  assert.throws(() => calculateTotal(10000, 0), {
    name: "RangeError",
    message: "Quantity must be at least 1",
  });
});

test("formatRupiah menghasilkan format IDR", () => {
  const result = formatRupiah(20000);

  assert.match(result, /20\.000/);
});
