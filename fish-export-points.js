(() => {
  // Xuất file không cần điểm; giữ API mà luồng tải file đang gọi.
  window.fishCheckExport = async count => ({
    id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now()),
    user: 'local-export',
    count: Number(count) || 1
  });
  window.fishChargeExport = async ticket => 0;
})();
