import React, { useState, useEffect } from "react";

const DAYS_OF_WEEK = ["日", "一", "二", "三", "四", "五", "六"];

export default function CustomCalendar({ startDate, endDate }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [highlightedDates, setHighlightedDates] = useState([]); // 初始化為空陣列
  // 計算當月的所有天數
  const getDaysInMonth = (year, month) => {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay(); // 月份第一天是星期幾
    const totalDays = new Date(year, month + 1, 0).getDate(); // 當月總天數

    // 前置空白（非當月日期）
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // 當月日期
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    // 當月日期
    for (let i = totalDays; i <= 35; i++) {
      days.push(null);
    }

    return days;
  };

  const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  useEffect(() => {
    if (startDate instanceof Date && endDate instanceof Date) {
      const range = [];
      
      // 檢查是否在當前顯示的月份內
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const startTime = new Date(currentYear, currentMonth, 1);
      const endTime = new Date(currentYear, currentMonth + 1, 0);

      // 計算實際要顯示的日期範圍
      const rangeStart = new Date(Math.max(startDate, startTime));
      const rangeEnd = new Date(Math.min(endDate, endTime));

      // 如果日期範圍與當前月份有重疊
      if (rangeStart <= endTime && rangeEnd >= startTime) {
        const startDay = rangeStart.getDate();
        const endDay = rangeEnd.getDate();
        
        for (let i = startDay; i <= endDay; i++) {
          range.push(i);
        }
        setHighlightedDates(range);
      } else {
        setHighlightedDates([]); // 當前月份沒有需要高亮的日期
      }
    } else {
      setHighlightedDates([]); // 如果沒有範圍，清空高亮日期
    }
  }, [startDate, endDate, currentDate]);

  // 切換月份
  const handleMonthChange = (direction) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
    setCurrentDate(newDate);
  };

  return (
    <div style={styles.container}>
      {/* 月份切換 */}
      <div style={styles.header}>
        <button style={styles.navButton} onClick={() => handleMonthChange(-1)}>
          &lt;
        </button>
        <span style={styles.monthTitle}>
          {currentDate.toLocaleString('zh-TW', {
            year: 'numeric',
            month: 'long',
          })}
        </span>
        <button style={styles.navButton} onClick={() => handleMonthChange(1)}>
          &gt;
        </button>
      </div>

      {/* 星期標籤 */}
      <div style={styles.weekRow}>
        {DAYS_OF_WEEK.map((day) => (
          <div key={day} style={styles.weekday}>
            {day}
          </div>
        ))}
      </div>

      {/* 日期格子 */}
      <div style={styles.daysGrid}>
        {days.map((day, index) => (
          <div
            key={index}
            style={{
              ...styles.day,
              ...(day && highlightedDates.includes(day)
                ? styles.highlightedDay
                : {}),
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  navButton: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "18px",
    cursor: "pointer",
  },
  monthTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  weekRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginBottom: "10px",
    justifyItems: "center",
  },
  weekday: {
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#666",
  },
  daysGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "5px",
    justifyItems: "center",
  },
  day: {
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    fontSize: "14px",
  },
  highlightedDay: {
    backgroundColor: "#e0f7fa",
    color: "#000",
    fontWeight: "bold",
    background: 'var(---Button-01, linear-gradient(81deg, #FBDBD6 10.58%, #D9DFF0 75.92%))'
  },
};
