 const ToggleSwitch = ({ leftLabel, rightLabel, isRight, onChange }) => {

    return(
    <div className="flex items-center justify-center space-x-6 mb-16">
      <span className={`text-sm sm:text-lg md:text-xl font-medium ${!isRight ? 'text-blue-600' : 'text-gray-500'}`}>
        {leftLabel}
      </span>
      <button
        onClick={() => onChange(!isRight)}
        className={`relative inline-flex md:h-12 md:w-28 h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none ${
          isRight ? 'bg-blue-600' : 'bg-blue-600'
        }`}
      >
        <span
          className={`inline-block md:h-10 md:w-10 h-6 w-6 transform rounded-full bg-white transition duration-200 ease-in-out ${
            isRight ? 'translate-x-7 sm:translate-x-16' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm sm:text-lg md:text-xl font-medium ${isRight ? 'text-blue-600' : 'text-gray-500'}`}>
        {rightLabel}
      </span>
    </div>
  );
}
export default ToggleSwitch;
