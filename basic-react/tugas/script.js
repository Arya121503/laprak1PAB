// Functional Component
const Counter = () => {
    const [count, setCount] = React.useState(0); // State untuk menyimpan nilai counter

    // Event handler untuk mengurangi dan menambah nilai counter
    const decrease = () => setCount(count - 1);
    const increase = () => setCount(count + 1);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrease}>-1</button>
            <button onClick={increase}>+1</button>
        </div>
    );
};

// Render ke dalam elemen dengan ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
