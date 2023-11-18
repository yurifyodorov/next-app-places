'use client';

import React from "react";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";
import { BiDollar } from "react-icons/bi";

import styles from "./Input.module.css";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    register,
    required,
    errors,
  }) => {
  return (
    <div className={styles.wrapper}>
      {formatPrice && (
        <BiDollar
          size={24}
          className={styles.dollarIcon}
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          ${styles.input}
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-red-500' : 'focus:border-black'}
        `}
      />
      <label
        className={`
          ${styles.label}
          text-md
          ${formatPrice ? 'left-9' : 'left-4'}
          ${errors[id] ? 'text-red-500' : 'text-zinc-400'}
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;