import React from "react";
import './ExpenseForm.css';

export default function ExpenseForm(){
    return (
        <form>
        {/* this div hold all inputs !! */}
            <div className="new-expense__controls">

                <div className="new-expense__control">
                <label>Title</label>
                <input type="text"/>
                </div>

                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" />
                </div>

                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2019-01-01' max = '2025-12-31'/>
                </div>


                <div className="new-expense__actions">
                    <button type="submit">done</button>
                </div>
            </div>
        </form>
    );
}