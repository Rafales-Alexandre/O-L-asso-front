import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InstrumentForm from './InstrumentForm';
import { createInstrument, updateInstrument } from '../../actions/instrumentActions';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('InstrumentForm component', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders without errors', () => {
    const { container } = render(<InstrumentForm />);
    expect(container).toBeInTheDocument();
  });

  it('dispatches createInstrument action when submit form in create mode', () => {
    const { getByLabelText, getByText } = render(<InstrumentForm />);

    const codeInput = getByLabelText(/Code/i);
    const pupitreInput = getByLabelText(/Pupitre/i);
    const observationInput = getByLabelText(/Observation/i);
    const depthInput = getByLabelText(/Tirant/i);
    const rodsInput = getByLabelText(/Profondeur/i);
    const weightInput = getByLabelText(/Poids/i);
    const stickerRadio = getByLabelText(/Sticker/i);
    const submitBtn = getByText(/Valider/i);

    fireEvent.change(codeInput, { target: { value: 'Code123' } });
    fireEvent.change(pupitreInput, { target: { value: 'Pupitre123' } });
    fireEvent.change(observationInput, { target: { value: 'Observation123' } });
    fireEvent.change(depthInput, { target: { value: '10' } });
    fireEvent.change(rodsInput, { target: { value: '20' } });
    fireEvent.change(weightInput, { target: { value: '30' } });
    fireEvent.click(stickerRadio);

    fireEvent.click(submitBtn);

    expect(dispatch).toHaveBeenCalledWith(
      createInstrument({
        code: 'Code123',
        pupitre: 'Pupitre123',
        observation: 'Observation123',
        depth: 10,
        rods: 20,
        weight: 30,
        sticker: true,
      }),
    );
  });

  it('dispatches updateInstrument action when submit form in edit mode', () => {
    const { getByLabelText, getByText } = render(
      <InstrumentForm isEditMode data={[{ id: '123', code: 'Code123', pupitre: 'Pupitre123', observation: 'Observation123', depth: 10, rods: 20, weight: 30, sticker: true }]} />,
    );

    const codeInput= getByLabelText(/Code/i);
    const pupitreInput = getByLabelText(/Pupitre/i);
    const observationInput = getByLabelText(/Observation/i);
    const depthInput = getByLabelText(/Tirant/i);
    const rodsInput = getByLabelText(/Profondeur/i);
    const weightInput = getByLabelText(/Poids/i);
    const stickerRadio = getByLabelText(/Sticker/i);
    const submitBtn = getByText(/Valider/i);
    fireEvent.change(codeInput, { target: { value: 'Code456' } });
fireEvent.change(pupitreInput, { target: { value: 'Pupitre456' } });
fireEvent.change(observationInput, { target: { value: 'Observation456' } });
fireEvent.change(depthInput, { target: { value: '15' } });
fireEvent.change(rodsInput, { target: { value: '25' } });
fireEvent.change(weightInput, { target: { value: '35' } });
fireEvent.click(stickerRadio);

fireEvent.click(submitBtn);

expect(dispatch).toHaveBeenCalledWith(
  updateInstrument('123', {
    code: 'Code456',
    pupitre: 'Pupitre456',
    observation: 'Observation456',
    depth: 15,
    rods: 25,
    weight: 35,
    sticker: true,
  }),
);
});
});
