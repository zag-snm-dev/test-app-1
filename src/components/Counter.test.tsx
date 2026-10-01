import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe('Counterコンポーネント', () => {
  it('カウンターの初期値が０で表示されること', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('カウンター値が０の時リセットボタンが非活性になっていること', () => {
    render(<Counter />);
    const resetButton = screen.getByRole('button', { name: 'リセット→０' });
    expect(resetButton).toBeDisabled();
  });

  it('カウントボタン押下後＋１すること', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const button = screen.getByRole('button', { name: 'カウント＋１' });
    await user.click(button);
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('カウンター値が１以上の時にリセットボタンが活性化していること', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const addButton = screen.getByRole('button', { name: 'カウント＋１' });
    await user.click(addButton);

    const resetButton = screen.getByRole('button', { name: 'リセット→０' });
    expect(resetButton).toBeEnabled();
  });

  it('リセットボタンクリックでカウンター値が０になりリセットボタンが非活性になること', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const addButton = screen.getByRole('button', { name: 'カウント＋１' });
    const resetButton = screen.getByRole('button', { name: 'リセット→０' });

    await user.click(addButton);
    expect(screen.getByTestId('count')).toHaveTextContent('1');

    await user.click(resetButton);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
    expect(resetButton).toBeDisabled();
  });
});