"use client"

import { motion } from "framer-motion"
import { VolumeX, Volume2 } from "react-feather"

const SoundToggle = ({ enabled, toggle, onCursorChange }) => {
  return (
    <motion.button
      className="sound-toggle"
      onClick={toggle}
      onMouseEnter={() => onCursorChange("button", enabled ? "Mute" : "Unmute")}
      onMouseLeave={() => onCursorChange("default")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </motion.button>
  )
}

export default SoundToggle

