import React, { useState } from 'react';
import Modal from '../AdminPages/Modal'; 
import Card from './AssignCard'; 
import AssignmentModal from './AssignmentModal';

const items = [
    {
      id: 1,
      title: 'Deep Breathing Exercises',
      image: './3.jpg',
      description: (
        <ul>
          <li>Reduces stress and anxiety</li>
          <li>Improves relaxation and mental clarity</li>
          <li>Enhances overall emotional well-being</li>
          <li><strong>Steps:</strong></li>
          <li>Find a comfortable position: Sit or lie down in a comfortable position with your back straight.</li>
          <li>Close your eyes: Gently close your eyes to minimize distractions.</li>
          <li>Inhale deeply: Breathe in slowly through your nose for a count of four, expanding your abdomen.</li>
          <li>Hold your breath: Hold your breath for a count of four.</li>
          <li>Exhale slowly: Exhale slowly through your mouth for a count of six, allowing your abdomen to fall.</li>
          <li>Repeat: Repeat the process for 5-10 minutes.</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: 'Progressive Muscle Relaxation',
      image: '4.jpg',
      description: (
        <ul>
          <li>Reduces muscle tension</li>
          <li>Promotes deep relaxation</li>
          <li>Helps in managing anxiety and stress</li>
          <li><strong>Steps:</strong></li>
          <li>Find a quiet place: Sit or lie down in a quiet environment.</li>
          <li>Focus on your feet: Tense the muscles in your feet by curling your toes tightly. Hold for 5-10 seconds.</li>
          <li>Release the tension: Slowly release the tension and relax your muscles.</li>
          <li>Move upwards: Gradually work your way up the body, tensing and relaxing each muscle group (calves, thighs, abdomen, etc.).</li>
          <li>Practice regularly: Perform this exercise daily, focusing on deep, slow breaths.</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: 'Gentle Yoga Stretches',
      image: '4.jpg',
      description: (
        <ul>
          <li>Improves flexibility and relaxation</li>
          <li>Reduces physical tension</li>
          <li>Enhances mental calmness</li>
          <li><strong>Steps:</strong></li>
          <li>Cat-Cow Stretch: Start on your hands and knees. Inhale, arch your back and lift your head (Cow Pose). Exhale, round your back and tuck your chin (Cat Pose). Repeat for 5-10 breaths.</li>
          <li>Child’s Pose: Kneel on the floor, sit back on your heels, and stretch your arms forward. Lower your forehead to the floor and hold for 30 seconds to 1 minute.</li>
          <li>Seated Forward Bend: Sit with your legs extended straight. Reach for your toes and hold for 30 seconds.</li>
        </ul>
      ),
    },
    {
      id: 4,
      title: 'Mindfulness Meditation',
      image: '3.jpg',
      description: (
        <ul>
          <li>Promotes mental clarity and focus</li>
          <li>Reduces symptoms of depression and anxiety</li>
          <li>Enhances emotional resilience</li>
          <li><strong>Steps:</strong></li>
          <li>Find a quiet place: Sit comfortably with your back straight.</li>
          <li>Focus on your breath: Close your eyes and pay attention to your breath as you inhale and exhale.</li>
          <li>Observe your thoughts: Allow thoughts to come and go without judgment. Gently bring your focus back to your breath.</li>
          <li>Continue for 5-10 minutes: Practice daily to increase your mindfulness and relaxation.</li>
        </ul>
      ),
    },
    {
      id: 5,
      title: 'Tai Chi',
      image: '3.jpg',
      description: (
        <ul>
          <li>Improves balance and coordination</li>
          <li>Reduces stress and promotes relaxation</li>
          <li>Enhances mental and physical well-being</li>
          <li><strong>Steps:</strong></li>
          <li>Warm-Up: Begin with gentle stretching or walking to prepare your body.</li>
          <li>Practice slow movements: Perform Tai Chi movements slowly and gracefully, focusing on balance and coordination.</li>
          <li>Use deep breathing: Coordinate your breathing with your movements.</li>
          <li>End with cool down: Finish with some gentle stretching to relax.</li>
        </ul>
      ),
    },
    {
      id: 6,
      title: 'Walking',
      image: '4.jpg',
      description: (
        <ul>
          <li>Boosts mood and reduces anxiety</li>
          <li>Improves cardiovascular health</li>
          <li>Enhances overall mental clarity</li>
          <li><strong>Steps:</strong></li>
          <li>Choose a comfortable route: Select a safe and pleasant walking path.</li>
          <li>Wear comfortable shoes: Ensure you have supportive footwear.</li>
          <li>Start slowly: Begin with a gentle pace and gradually increase your speed.</li>
          <li>Walk for 20-30 minutes: Aim to walk daily, adjusting the duration based on your comfort level.</li>
        </ul>
      ),
    },
    {
      id: 7,
      title: 'Simple Strength Training',
      image: '3.jpg',
      description: (
        <ul>
          <li>Improves mood and self-esteem</li>
          <li>Reduces symptoms of depression</li>
          <li>Enhances physical strength and resilience</li>
          <li><strong>Steps:</strong></li>
          <li>Warm-Up: Perform light cardio to warm up your muscles.</li>
          <li>Choose simple exercises: Use bodyweight exercises like squats, lunges, or push-ups.</li>
          <li>Perform sets and reps: Start with 1-2 sets of 8-12 repetitions for each exercise.</li>
          <li>Cool down: Stretch the muscles you worked during your session.</li>
        </ul>
      ),
    },
    {
      id: 8,
      title: 'Guided Imagery',
      image: '4.jpg',
      description: (
        <ul>
          <li>Reduces stress and anxiety</li>
          <li>Promotes relaxation and mental clarity</li>
          <li>Enhances emotional well-being</li>
          <li><strong>Steps:</strong></li>
          <li>Find a comfortable position: Sit or lie down in a quiet space.</li>
          <li>Close your eyes: Close your eyes and take deep breaths.</li>
          <li>Visualize a calm scene: Imagine a peaceful and relaxing place (e.g., a beach or forest).</li>
          <li>Engage your senses: Focus on the sensory details of your imagined place.</li>
          <li>Continue for 5-10 minutes: Practice regularly to enhance relaxation.</li>
        </ul>
      ),
    },
    {
      id: 9,
      title: 'Breathing Techniques',
      image: '3.jpg',
      description: (
        <ul>
          <li>Helps to control anxiety and stress</li>
          <li>Enhances relaxation and mental focus</li>
          <li>Improves respiratory function</li>
          <li><strong>Steps:</strong></li>
          <li>Find a comfortable position: Sit or lie down comfortably.</li>
          <li>Practice diaphragmatic breathing: Place one hand on your chest and the other on your abdomen.</li>
          <li>Inhale deeply: Breathe in through your nose, allowing your abdomen to rise.</li>
          <li>Exhale slowly: Breathe out through your mouth, letting your abdomen fall.</li>
          <li>Repeat: Continue for 5-10 minutes, focusing on deep, even breaths.</li>
        </ul>
      ),
    },
    {
      id: 10,
      title: 'Chair Yoga',
      image: '4.jpg',
      description: (
        <ul>
          <li>Improves flexibility and relaxation</li>
          <li>Reduces physical and mental tension</li>
          <li>Enhances overall comfort and well-being</li>
          <li><strong>Steps:</strong></li>
          <li>Sit upright: Sit in a sturdy chair with your feet flat on the ground.</li>
          <li>Neck stretch: Gently tilt your head to one side, holding for 15-30 seconds, then switch sides.</li>
          <li>Seated forward bend: Bend forward at the waist, reaching toward the floor or your feet. Hold for 15-30 seconds.</li>
          <li>Seated twist: Twist your torso to one side, holding the back of the chair for support. Hold for 15-30 seconds, then switch sides.</li>
        </ul>
      ),
    },
    {
      id: 11,
      title: 'Cognitive Behavioral Exercises',
      image: '3.jpg',
      description: (
        <ul>
          <li>Helps in managing anxiety and depression</li>
          <li>Improves coping skills and resilience</li>
          <li>Enhances mental and emotional clarity</li>
          <li><strong>Steps:</strong></li>
          <li>Identify negative thoughts: Recognize and write down negative or distressing thoughts.</li>
          <li>Challenge thoughts: Evaluate the evidence for and against these thoughts.</li>
          <li>Replace with positive thoughts: Replace negative thoughts with more balanced or positive alternatives.</li>
          <li>Practice regularly: Engage in this exercise daily to improve mental resilience.</li>
        </ul>
      ),
    },
    {
      id: 12,
      title: 'Visualization Techniques',
      image: '4.jpg',
      description: (
        <ul>
          <li>Promotes relaxation and mental focus</li>
          <li>Reduces symptoms of stress and anxiety</li>
          <li>Enhances overall emotional well-being</li>
          <li><strong>Steps:</strong></li>
          <li>Find a quiet time: Set aside time each day for gratitude practice.</li>
          <li>List three things: Write down three things you are grateful for.</li>
          <li>Reflect on each item: Spend a few moments reflecting on why you are grateful for each item.</li>
          <li>Practice regularly: Incorporate this practice into your daily routine to foster positive thinking.</li>
        </ul>
      ),
    },
    {
      id: 13,
      title: 'Self-Massage Techniques',
      image: '4.jpg',
      description: (
        <ul>
          <li>Reduces muscle tension and stress</li>
          <li>Enhances physical and mental relaxation</li>
          <li>Improves overall comfort and well-being</li>
          <li><strong>Steps:</strong></li>
          <li>Warm-up: Rub your hands together to warm them.</li>
          <li>Start with hands: Massage your hands using circular motions.</li>
          <li>Move to arms: Gently knead your forearms and upper arms.</li>
          <li>Massage neck and shoulders: Use your fingers to gently massage the neck and shoulder areas.</li>
          <li>Use a relaxing oil: Optional – use a soothing massage oil or lotion for better comfort.</li>
        </ul>
      ),
    },
    {
      id: 14,
      title: 'Journaling',
      image: '3.jpg',
      description: (
        <ul>
          <li>Helps in processing emotions and thoughts</li>
          <li>Enhances mental clarity and focus</li>
          <li>Reduces stress and improves emotional health</li>
          <li><strong>Steps:</strong></li>
          <li>Find a quiet space: Choose a comfortable and quiet place to write.</li>
          <li>Start writing: Write about your thoughts, feelings, and daily experiences.</li>
          <li>Reflect: Review your entries regularly to identify patterns or areas of concern.</li>
          <li>Use prompts: If needed, use journal prompts to guide your writing (e.g., “What am I grateful for today?”).</li>
        </ul>
      ),
    },
    {
      id: 15,
      title: 'Gratitude Exercises',
      image: '4.jpg',
      description: (
        <ul>
          <li>Improves overall emotional well-being</li>
          <li>Reduces symptoms of depression and anxiety</li>
          <li>Enhances mental clarity and positive thinking</li>
          <li><strong>Steps:</strong></li>
          <li>Find a quiet time: Set aside time each day for gratitude practice.</li>
          <li>List three things: Write down three things you are grateful for.</li>
          <li>Reflect on each item: Spend a few moments reflecting on why you are grateful for each item.</li>
          <li>Practice regularly: Incorporate this practice into your daily routine to foster positive thinking.</li>
        </ul>
      ),
    },
  ];
  

  const CarePlanSchedule = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [itemToAssign, setItemToAssign] = useState(null);
    const psychiatristId = sessionStorage.getItem('psyid');
  
    const openModal = (item) => {
      setSelectedItem(item);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedItem(null);
    };
  
    const openAssignModal = (item) => {
      setItemToAssign(item);
      setIsAssignModalOpen(true);
    };
  
    const closeAssignModal = () => {
      setIsAssignModalOpen(false);
      setItemToAssign(null);
    };
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Care Plan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClick={openModal}
              onAssign={openAssignModal}
            />
          ))}
        </div>
        {isModalOpen && selectedItem && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedItem.title}
            content={selectedItem.description}
          />
        )}
        {isAssignModalOpen && itemToAssign && (
          <AssignmentModal
            isOpen={isAssignModalOpen}
            onClose={closeAssignModal}
            itemId={itemToAssign.id}
            psychiatristId={psychiatristId}
          />
        )}
      </div>
    );
  };
  
  export default CarePlanSchedule;
